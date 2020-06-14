/**
 * Returns the modified files in the PR
 * @param {function} octokit
 * @param {string} repo
 * @param {string} owner
 * @param {number} PR
 */
const getModifiedFiles = async (octokit, repo, owner, PR) => {
  // Code for getting the PR associated to a commit.
  // const { data = [] } = await octokit.repos.listPullRequestsAssociatedWithCommit({
  //   owner,
  //   repo,
  //   commit_sha: sha,
  // });

  // const pullRequestIds = data.map((pr) => pr.number);

  // if (pullRequestIds.lenngth === 0) {
  //   console.log(`No pull requests found for the given commit ${sha}`);
  //   return [];
  // }

  // Get the files of the latest PR
  const files = await octokit.pulls.listFiles({
    owner,
    repo,
    pull_number: PR,
    per_page: 100,
  });

  return files.data.map((file) => file.filename);
};

module.exports = {
  getModifiedFiles,
};
