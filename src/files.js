const getModifiedFiles = async (octokit, repo, owner, sha) => {
  const { data = [] } = await octokit.repos.listPullRequestsAssociatedWithCommit({
    owner,
    repo,
    commit_sha: sha,
  });

  const pullRequestIds = data.map((pr) => pr.number);

  if (pullRequestIds.lenngth === 0) {
    console.log(`No pull requests found for the given commit ${sha}`);
    return [];
  }

  // Get the files of the latest PR
  const files = await octokit.pulls.listFiles({
    owner,
    repo,
    pull_number: pullRequestIds.slice(-1)[0],
    per_page: 100,
  });

  return files.data.map((file) => file.filename);
};

module.exports = {
  getModifiedFiles,
};
