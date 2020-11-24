const fs = require('fs');
const core = require('@actions/core');
const util = require('util');

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

        const modifiedFiles = await getModifiedFiles({
            octokit,
            repo,
            owner,
            pullNumber,
        });
        const folders = await getFolders(sources);

        await Promise.all(folders.map(async (path) => {
            const isRoot = path === '';
            const folder = (!path.endsWith('/') && !isRoot) ? `${path}/` : path;

            // Check if at least one file was modified in the watchFolder
            if (isRoot || modifiedFiles.some((filename) => filename.startsWith(folder))) {
                // Check if changelog is in the modified files
                if (!modifiedFiles.includes(`${folder}CHANGELOG.md`)) {
                    throw new Error(`Files in "${isRoot ? 'root' : folder}" have been modified but "${folder}CHANGELOG.md" was not modified`);
                }
            }

            const changelogContent = await readFile(`${folder}CHANGELOG.md`, {encoding: 'utf-8'});
            validateChangelog(changelogContent);
        }));

        // Checks if the branch is release or once of release_branches input.
        if (releaseBranches.find((releaseBranch) => branch.startsWith(releaseBranch))) {
            const changelogs = modifiedFiles.filter((file) => file.endsWith('CHANGELOG.md'));

            if (changelogs.length) {
                /** If branch name contains project ex: release/account */
                const project = branch.includes('/') && branch.split('/').slice(-1)[0];

                if (project) {
                    const projectChangelog = changelogs.find((file) => file.includes(`${project}/CHANGELOG.md`));

                    if (projectChangelog) {
                        validateRelease(projectChangelog);
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
