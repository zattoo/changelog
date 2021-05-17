const fs = require('fs');
const core = require('@actions/core');
const util = require('util');
const wcmatch = require('wildcard-match');

const readFile = util.promisify(fs.readFile);

const {
    context,
    getOctokit,
} = require('@actions/github');

const {
    compareChangelog,
    validateRelease,
} = require('./release');
const {validateChangelog} = require('./validate');
const {
    getFolders,
    getModifiedFiles,
} = require('./files');

const run = async () => {
    const token = core.getInput('token', {required: true});
    const octokit = getOctokit(token);
    const sources = core.getInput('sources', {required: false});
    const exclude = core.getInput('exclude', {required: false});
    const releaseBranchesInput = core.getInput('release_branches', {required: false});
    const releaseBranches = (releaseBranchesInput && releaseBranchesInput.split(/, */g)) || ['release'];
    const ignoreActionLabel = core.getInput('ignoreActionLabel');

    const repo = context.payload.repository.name;
    const owner = context.payload.repository.full_name.split('/')[0];
    const pullNumber = context.payload.pull_request.number;
    const labels = context.payload.pull_request.labels.map((label) => label.name);
    const branch = context.payload.pull_request.head.ref;
    const base = context.payload.pull_request.base.ref;

    try {
        // Ignore the action if -changelog label (or custom name) exists
        if (labels.includes(ignoreActionLabel)) {
            core.info(`Ignore the action due to label ${ignoreActionLabel}`);
            process.exit(0);
        }

        const [branchName, project] = branch.split('/');
        const isReleaseBranch = releaseBranches.find((releaseBranch) => branchName.startsWith(releaseBranch));

        const isExcluded = wcmatch(exclude ? exclude.split(',')
            .map((name) => name.trim()) : []);

        let modifiedFiles = (await getModifiedFiles({
            octokit,
            repo,
            owner,
            pullNumber,
        })).filter((file) => !isExcluded(file));

        // Limits modified files to the ones in the project folder of the release
        if (isReleaseBranch && project) {
            const isInAppFolder = wcmatch([`projects/${project}/**`, `packages/${project}/**`]);
            modifiedFiles = modifiedFiles.filter((file) => isInAppFolder(file));
        }

        const folders = await getFolders(sources);

        await Promise.all(folders.map(async (path) => {
            const isRoot = path === '';
            const folder = (!path.endsWith('/') && !isRoot) ? `${path}/` : path;

            // Check if at least one file was modified in the watchFolder
            if (isRoot || modifiedFiles.some((filename) => filename.startsWith(folder))) {
                /**
                 * Check if changelog is in the modified files
                 * when is not a release branch or
                 * is a release branch with a project
                 */
                if (((isReleaseBranch && project) || !isReleaseBranch) && !modifiedFiles.includes(`${folder}CHANGELOG.md`)) {
                    throw new Error(`Files in "${isRoot ? 'root' : folder}" have been modified but "${folder}CHANGELOG.md" was not modified`);
                }
            }

            const changelogContent = await readFile(`${folder}CHANGELOG.md`, {encoding: 'utf-8'});
            validateChangelog(changelogContent);
        }));

        if (isReleaseBranch) {
            const changelogs = modifiedFiles.filter((file) => file.endsWith('CHANGELOG.md'));

            if (changelogs.length) {
                if ((changelogs.length === 1 && !project) || project) {
                    const projectChangelog = project ? changelogs.find((file) => file.includes(`${project}/CHANGELOG.md`)) : changelogs[0];

                    if (projectChangelog) {
                        await validateRelease(projectChangelog);
                    } else {
                        throw new Error(`The changelog for project "${project}" must be modified for this release`);
                    }
                } else {
                    /** For each changelog determine if last version is different than production and validate it */
                    await Promise.all(changelogs.map(async (path) => {
                        await compareChangelog({
                            octokit,
                            repo,
                            owner,
                            path,
                            base,
                            branch,
                        });
                    }));
                }
            } else {
                throw new Error('At least one changelog should be modified for a release');
            }
        }
    } catch (error) {
        core.setFailed(error.message);
    }
};

run();
