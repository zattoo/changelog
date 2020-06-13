const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');

const {validateChangelog} = require('./validate');

const ingnoreActionMessage = `-Changelog` // ToDo: make it customizable

try {
  const CHANGELOGS = JSON.parse(core.getInput('changelogs'))

  // Not do anything if -Changelog is a commit message
  const ignoreAction = github.context.payload.commits.some(commit => commit.message === ingnoreActionMessage)
  if (ignoreAction) {
    console.log(`Exit the action due to message with ${ingnoreActionMessage}`)
    process.exit(0)
  }

  CHANGELOGS.forEach(changelog => {
    // For each watchFolder check if it has modified files
      // If it has, verify the changelog
      // If is not modified warn it

    const changelogContent = fr.readFileSync(changelog.file, { encoding: 'utf-8' });
    console.log(changelogContent);
    validateChangelog(changelogContent);
  
  })
  
  const context = JSON.stringify(github.context, undefined, 2)
  console.log(`The event context: ${context}`);

} catch (error) {
  core.setFailed(error.message);
}