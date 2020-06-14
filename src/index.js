const fs = require('fs');
const core = require('@actions/core');
const { context, getOctokit } = require('@actions/github');

const { validateChangelog } = require('./validate');
const { getModifiedFiles } = require('./files');

const run = async () => {
  try {
    const token = core.getInput('token', { required: true });
    const changelogs = JSON.parse(core.getInput('changelogs', { required: true }));
    const ingnoreActionMessage = core.getInput('ignoreActionMessage');
    const octokit = getOctokit(token);

    // Not do anything if -Changelog is a commit message
    const ignoreAction = context.payload.commits
      .some((commit) => commit.message === ingnoreActionMessage);
    if (ignoreAction) {
      console.log(`Exit the action due to message with ${ingnoreActionMessage}`);
      process.exit(0);
    }

    const repo = context.payload.repository.name;
    const owner = context.payload.repository.owner.name;
    const { sha } = context;

    const modifiedFiles = await getModifiedFiles(octokit, repo, owner, sha);

    changelogs.forEach((changelog) => {
      // Check if at least one file was modified in the watchFolder
      if (modifiedFiles.some((filename) => filename.startsWith(changelog.watchFolder))) {
        // Check if changelog is in the modified files
        if (!modifiedFiles.includes(changelog.file)) {
          core.warning(`Files in ${changelog.watchFolder} have been modified but ${changelog.file} was not modified`);
        }
      }

      const changelogContent = fs.readFileSync(changelog.file, { encoding: 'utf-8' });
      validateChangelog(changelogContent);
    });
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
};

run();
