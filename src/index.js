const fs = require('fs');
const core = require('@actions/core');
const { context, getOctokit } = require('@actions/github');

const { validateChangelog } = require('./validate');
const { getModifiedFiles } = require('./files');

const run = async () => {
  const token = core.getInput('token', { required: true });
  const octokit = getOctokit(token);
  const sources = core.getInput('sources', { required: true }).split(',');
  const ignoreActionLabel = core.getInput('ignoreActionLabel');

  const repo = context.payload.repository.name;
  const owner = context.payload.repository.full_name.split('/')[0];
  const pullNumber = context.payload.pull_request.number;
  const labels = context.payload.pull_request.labels.map((label) => label.name);
  const branch = context.payload.pull_request.head.ref;
  const { sha } = context.payload.pull_request.head;

  try {
    // Ignore the action if -Changelog label (or custom name) exists
    if (labels.includes(ignoreActionLabel)) {
      core.info(`Ignore the action due to label ${ignoreActionLabel}`);
      process.exit(0);
    }

    const modifiedFiles = await getModifiedFiles(octokit, repo, owner, pullNumber);

    sources.forEach((folder) => {
      // Check if at least one file was modified in the watchFolder
      if (modifiedFiles.some((filename) => filename.startsWith(folder))) {
        // Check if changelog is in the modified files
        if (!modifiedFiles.includes(`${folder}CHANGELOG.md`)) {
          throw new Error(`Files in "${folder}" have been modified but "${folder}CHANGELOG.md" was not modified`);
        }
      }

      const changelogContent = fs.readFileSync(`${folder}CHANGELOG.md`, { encoding: 'utf-8' });
      const { isUnreleased, version, date } = validateChangelog(changelogContent);

      console.log(changelogContent);

      // Checks if the branch is release
      if (branch === 'release') {
        if (isUnreleased) {
          throw new Error('A release branch can\'t be unreleased');
        }

        if (!version || version === 'Unreleased') {
          throw new Error('A release branch should have a version');
        }

        if (!date) {
          throw new Error('A release branch should have a date');
        }

        const { version: packageVersion } = JSON.parse(fs.readFileSync(`${folder}package.json`, { encoding: 'utf-8' }));
        const { version: packageLockVersion } = JSON.parse(fs.readFileSync(`${folder}package-lock.json`, { encoding: 'utf-8' }));

        if (packageVersion !== version || packageLockVersion !== version) {
          throw new Error(`The package version "${packageVersion}" does not match the newest version "${version}"`);
        }
      }
    });
  } catch (error) {
    octokit.repos.createCommitStatus({
      owner,
      repo,
      sha,
      state: 'error',
      description: error.message,
      context: 'Changelog',
    });
    core.setFailed(error.message);
  }
};

run();
