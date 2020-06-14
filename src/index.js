const fs = require('fs');
const core = require('@actions/core');
const {context} = require('@actions/github');

const {validateChangelog} = require('./validate');
const ingnoreActionMessage = `-Changelog` // ToDo: make it customizable

const repo = context.payload.repository;
const owner = repo.owner;

try {
  const CHANGELOGS = JSON.parse(core.getInput('changelogs'));
  const modifiedFiles = JSON.parse(core.getInput('modifiedFiles'));
  console.log(modifiedFiles);

  const eventPath = process.env.GITHUB_EVENT_PATH
  const events = fs.readFileSync(eventPath, { encoding: 'utf-8' });
  console.log(events)

  console.log('-------------')
  
  console.log(process.env);

  // Not do anything if -Changelog is a commit message
  const ignoreAction = context.payload.commits.some(commit => commit.message === ingnoreActionMessage)
  if (ignoreAction) {
    console.log(`Exit the action due to message with ${ingnoreActionMessage}`)
    process.exit(0)
  }

  CHANGELOGS.forEach(changelog => {
    // TODO: For each watchFolder check if it has modified files
      // If it has, verify the changelog
      // If is not modified warn it

    const changelogContent = fs.readFileSync(changelog.file, { encoding: 'utf-8' });
    validateChangelog(changelogContent);
  })

  console.log(`The event context: ${JSON.stringify(context, undefined, 2)}`);
} catch (error) {
  core.setFailed(error.message);
}