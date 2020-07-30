const {
    hasMagic,
    promise: glob
} = require('glob-promise');

/**
 * List all folders specified in sources
 * @param {string} [sources]
 * @returns {Promise<string[]>}
 */
const getFolders = async (sources) => {
    /** Use root directory if sources is not defined */
    if (!sources) {
        return ['']
    }

    const folders = []

    for await (const source of sources.split(/, */g)) {
        hasMagic(source)
            ? folders.push(...await glob(source))
            : folders.push(source)
    }

    return folders
}

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
        per_page: 100,
    });

    return files.data.map((file) => file.filename);
};

module.exports = {
    getFolders,
    getModifiedFiles
};
