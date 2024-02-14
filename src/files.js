const glob = require('fast-glob');

/**
 * List all folders specified in sources
 *
 * @param {string} [sources]
 */
const getFolders = async (sources) => {
    /** Use root directory if sources is not defined */
    if (!sources) {
        return [''];
    }

    /** @type {string[]} */
    const folders = [];

    await Promise.all(sources.split(/, */g).map(async (source) => {
        if (glob.isDynamicPattern(source)) {
            folders.push(...await glob(source.endsWith('/') ? source : `${source}/`));
        } else {
            folders.push(source);
        }
    }));

    return folders;
};

/**
 * Returns the modified files in the PR
 *
 * @param {PullRequest} param
 */
const getModifiedFiles = async ({
    octokit,
    repo,
    owner,
    pullNumber,
}) => {
    const files = await octokit.rest.pulls.listFiles({
        owner,
        repo,
        pull_number: pullNumber,
        per_page: 100,
    });

    return files.data.map((file) => file.filename);
};

/**
 * Returns the content of a file
 *
 * @param {PullRequest} param
 */
const getFileContent = async ({
    octokit,
    repo,
    owner,
    path,
    ref,
}) => {
    try {
        const content = await octokit.rest.repos.getContent({
            owner,
            repo,
            path,
            ref,
        });

        return content.data.content && Buffer.from(content.data.content, 'base64').toString();
    } catch (error) {
        /**
         * Cases where file does not exists
         * should not stop execution
         */
        console.log(error instanceof Error ? error.message : 'Unknown error');

        return null;
    }
};

module.exports = {
    getFolders,
    getModifiedFiles,
    getFileContent,
};

/**
 * @typedef {Object} PullRequest
 * @param {GithubObject} octokit
 * @param {string} repo
 * @param {string} owner
 * @param {string} path
 * @param {string} [ref]
 */

/** @typedef {import('@actions/github/lib/utils').GitHub} GithubObject */
