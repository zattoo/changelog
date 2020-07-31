const util = require('util');
const glob = require('glob');

const globPromise = util.promisify(glob);

/**
 * List all folders specified in sources
 * @param {string} [sources]
 * @returns {Promise<string[]>}
 */
const getFolders = async (sources) => {
    /** Use root directory if sources is not defined */
    if (!sources) {
        return [''];
    }

    const folders = [];

    for await (const source of sources.split(/, */g)) {
        if (glob.hasMagic(source)) {
            folders.push(...await globPromise(source));
        } else {
            folders.push(source);
        }
    }

    return folders;
};

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
    getModifiedFiles,
};
