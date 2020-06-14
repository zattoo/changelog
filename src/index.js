const fs = require('fs');
const core = require('@actions/core');
const { context, getOctokit } = require('@actions/github');

const { validateChangelog } = require('./validate');

const ingnoreActionMessage = '-Changelog'; // ToDo: make it customizable

const repo = context.payload.repository.name;
const { owner } = context.payload;
const { sha } = context.payload;

const getPR = async (octokit) => {
  console.log(repo, owner, sha);
  // const PRS = await octokit.repos.listPullRequestsAssociatedWithCommit({
  //   owner,
  //   repo,
  //   sha,
  // });

  // console.log(PRS);
};

try {
  const token = JSON.parse(core.getInput('token', { required: true }));
  const CHANGELOGS = JSON.parse(core.getInput('changelogs'));
  const modifiedFiles = JSON.parse(core.getInput('modifiedFiles'));
  console.log(modifiedFiles);

  const octokit = getOctokit(token);

  getPR(octokit);

  console.log(process.env);

  // Not do anything if -Changelog is a commit message
  const ignoreAction = context.payload.commits
    .some((commit) => commit.message === ingnoreActionMessage);
  if (ignoreAction) {
    console.log(`Exit the action due to message with ${ingnoreActionMessage}`);
    process.exit(0);
  }

  CHANGELOGS.forEach((changelog) => {
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