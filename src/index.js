const fs = require('fs');
const core = require('@actions/core');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);

const {
    context, getOctokit,
} = require('@actions/github');

const {validateChangelog} = require('./validate');
const {
    getModifiedFiles,
    getFolders,
} = require('./files');

const run = async () => {
    const token = core.getInput('token', {required: true});
    const octokit = getOctokit(token);
    const sources = core.getInput('sources', {required: false});
    const branches = core.getInput('branches', {required: false}) || ['release'];
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

        const modifiedFiles = await getModifiedFiles(octokit, repo, owner, pullNumber);
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
            const {
                isUnreleased, version, date,
            } = validateChangelog(changelogContent);

            // Checks if the branch is release
            if (branches.includes(branch)) {
                if (isUnreleased) {
                    throw new Error(`"${branch}" branch can't be unreleased`);
                }

                if (!version || version === 'Unreleased') {
                    throw new Error(`"${branch}" branch should have a version`);
                }

                if (!date) {
                    throw new Error(`"${branch}" branch should have a date`);
                }

                const {version: packageVersion} = JSON.parse(await readFile(`${folder}package.json`, {encoding: 'utf-8'}));
                if (packageVersion !== version) {
                    throw new Error(`The package version "${packageVersion}" does not match the newest version "${version}"`);
                }

                const packageLockStats = await stat(`${folder}package-lock.json`);

                if (packageLockStats) {
                    const {version: packageLockVersion} = JSON.parse(await readFile(`${folder}package-lock.json`, {encoding: 'utf-8'}));
                    if (packageLockVersion !== version) {
                        throw new Error(`The package-lock version "${packageVersion}" does not match the newest version "${version}"`);
                    }
                }
            }
        }
    } catch (error) {
        core.setFailed(error.message);
    }
};

run();
