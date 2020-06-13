const core = require('@actions/core');
const github = require('@actions/github');

try {
  const CHANGELOGS = JSON.parse(core.getInput('changelogs'))

  // Not do anything if -Changelog is a commit message
  const ignoreAction = github.context.payload.commits.some(commit => commit.message === '-Action')
  console.log({ignoreAction})
  if (ignoreAction) {
    console.log('Exit')
    process.exit(0)
  }

  CHANGELOGS.forEach(changelog => {
    console.log(changelog)
  })
  
  const context = JSON.stringify(github.context, undefined, 2)
  console.log(`The event context: ${context}`);

} catch (error) {
  core.setFailed(error.message);
}