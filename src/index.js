const fs = require('fs');
const core = require('@actions/core');
const { context, getOctokit } = require('@actions/github');

const { validateChangelog } = require('./validate');
const { getModifiedFiles } = require('./files');

const run = async () => {
  try {
    const token = core.getInput('token', { required: true });
    const files = JSON.parse(core.getInput('files', { required: true }));
    const ingnoreActionMessage = core.getInput('ignoreActionMessage');
    const octokit = getOctokit(token);

    const repo = context.payload.repository.name;
    const owner = context.payload.repository.full_name.split('/')[0];
    const pullNumber = context.payload.pull_request.number;
    const labels = context.payload.pull_request.labels.map((label) => label.name);
    const branch = context.payload.pull_request.head.ref;

    // Ignore the action if -Changelog label (or custom name) exists
    if (labels.includes(ingnoreActionMessage)) {
      core.info(`Ignore the action due to label ${ingnoreActionMessage}`);
      process.exit(0);
    }

    const modifiedFiles = await getModifiedFiles(octokit, repo, owner, pullNumber);

    files.forEach(({changelog, watchFolder, package}) => {
      // Check if at least one file was modified in the watchFolder
      if (modifiedFiles.some((filename) => filename.startsWith(watchFolder))) {
        // Check if changelog is in the modified files
        if (!modifiedFiles.includes(changelog)) {
          throw new Error(`Files in ${watchFolder} have been modified but ${changelog} was not modified`);
        }
      }

      const changelogContent = fs.readFileSync(changelog, { encoding: 'utf-8' });
      const {isUnreleased, version, date} = validateChangelog(changelogContent);

      // If the branch is release check if it has a package.json with a version the same as the fist H3
      // and a valid date
      if (branch === 'release') {
        if (isUnreleased) {
          throw new Error(`A release branch can't be unreleased`);
        }

        if (!version || version === 'Unreleased') {
          throw new Error('A release branch should have a version')
        }

        if (!date) {
          throw new Error('A release branch should have a date')
        }

        if (package) {
          const {version: packageVersion} = JSON.parse(fs.readFileSync(package, { encoding: 'utf-8' }));
          // TODO: Check package-lock too

          if (packageVersion !== version) {
            throw new Error(`The package version "${packageVersion}" does not match the latest version "${version}"`)
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
};

run();
