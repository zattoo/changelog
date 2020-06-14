const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');

const { validateChangelog } = require('./validate');

const ingnoreActionMessage = '-Changelog'; // ToDo: make it customizable

const { context } = github;
const repo = context.payload.repository.name;
const owner = context.payload.repository.owner.name;
const { sha } = context;

console.log(repo, owner, sha);

const getPR = async (octokit) => {
  const PRS = await octokit.repos.listPullRequestsAssociatedWithCommit({
    owner,
    repo,
    sha,
  });

  console.log(PRS);
};

try {
  const CHANGELOGS = JSON.parse(core.getInput('changelogs'));
  // const modifiedFiles = JSON.parse(core.getInput('modifiedFiles'));

  const token = core.getInput('token', { required: true });
  console.log(token);

  const octokit = new github.GitHub(token);

  getPR(octokit);

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