const fs = require('fs');
const core = require('@actions/core');
const { context, getOctokit } = require('@actions/github');

const { validateChangelog } = require('./validate');
const { getModifiedFiles } = require('./files');

const run = async () => {
  try {
    const token = core.getInput('token', { required: true });
    const changelogs = JSON.parse(core.getInput('changelogs', { required: true }));
    const ingnoreActionMessage = core.getInput('ingnoreActionMessage');
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

    const files = await getModifiedFiles(octokit, repo, owner, sha);
    console.log(files);

    changelogs.forEach((changelog) => {
      // TODO: For each watchFolder check if it has modified files
      // If it has, verify the changelog
      // If is not modified warn it
      const changelogContent = fs.readFileSync(changelog.file, { encoding: 'utf-8' });
      validateChangelog(changelogContent);
    });

    console.log(`The event context: ${JSON.stringify(context, undefined, 2)}`);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
