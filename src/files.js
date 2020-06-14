/**
 * Returns the modified files in the PR
 * @param {function} octokit
 * @param {string} repo
 * @param {string} owner
 * @param {number} pullNumber
 */
const getModifiedFiles = async (octokit, repo, owner, pullNumber) => {
  const files = await octokit.pulls.listFiles({
    owner,
    repo,
    pull_number: pullNumber,
    per_page: 100, // Todo read all pagination
  });

  return files.data.map((file) => file.filename);
};

module.exports = {
  getModifiedFiles,
};
