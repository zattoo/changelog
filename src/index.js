const fs = require('fs');
const core = require('@actions/core');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const {
    context,
    getOctokit,
} = require('@actions/github');

const {validateRelease} = require('./release');
const {validateChangelog} = require('./validate');
const {
    getFileContent,
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

        for await (const path of folders) {
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
        }

        // Checks if the branch is release or once of release_branches input.
        if (releaseBranches.find((releaseBranch) => branch.startsWith(releaseBranch))) {
            const changelogs = modifiedFiles.filter((file) => file.endsWith('CHANGELOG.md'));

            /**
             * If only one changelog is modified
             * there is no doubt of which one is correct
             */
            if (changelogs.length === 1) {
                validateRelease(changelogs[0], branch);
            }

            if (changelogs.length > 1) {
                /** If branch name contains project ex: release/account */
                const project = branch.includes('/') && branch.split('/').slice(-1)[0];

                if (project) {
                    changelogs.filter((file) => file.includes(`${project}/CHANGELOG.md`))
                        .forEach((file) => validateRelease(file, branch));
                } else {
                    /** For each changelog determine if last version is different than production */
                    for await (const path of changelogs) {
                        const previousText = await getFileContent({
                            octokit,
                            repo,
                            owner,
                            path,
                            ref: 'production',
                        });
                        const currentText = await getFileContent({
                            octokit,
                            repo,
                            owner,
                            path,
                            ref: branch,
                        });

                        if (previousText && currentText) {
                            const previousContent = validateChangelog(previousText);
                            const currentContent = validateChangelog(currentText);

                            console.log(previousContent.length, currentContent.length);

                            if (
                                !previousContent.isUnreleased &&
                                !currentContent.isUnreleased &&
                                previousContent.version !== currentContent.version
                            ) {
                                validateRelease(path, branch);
                            }
                        }
                    }
                }
            }
        }
    } catch (error) {
        core.setFailed(error.message);
    }
};

run();
