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
            folders.push(...await globPromise(source.endsWith('/') ? source : `${source}/`));
        } else {
            folders.push(source);
        }
    }

    return folders;
};

/**
 * Returns the modified files in the PR
 * @param {Object} params
 * @param {function} params.octokit
 * @param {string} params.repo
 * @param {string} params.owner
 * @param {number} params.pullNumber
 */
const getModifiedFiles = async ({
    octokit,
    repo,
    owner,
    pullNumber,
}) => {
    const files = await octokit.pulls.listFiles({
        owner,
        repo,
        pull_number: pullNumber,
        per_page: 100,
    });

    return files.data.map((file) => file.filename);
};

/**
 * Returns the content of a file
 * @param {Object} params
 * @param {function} params.octokit
 * @param {string} params.repo
 * @param {string} params.owner
 * @param {string} params.path
 * @param {string} [params.ref] - Default: the repository’s default
 */
const getFileContent = async ({
    octokit,
    repo,
    owner,
    path,
    ref,
}) => {
    try {
        const content = await octokit.repos.getContent({
            owner,
            repo,
            path,
            ref,
        });

        if (content.data?.content) {
            return Buffer.from(content.data.content, 'base64').toString();
        }
    } catch (error) {
        /**
         * Cases where file does not exists
         * should not stop execution
         */
        console.log(error);
    }
};

module.exports = {
    getFolders,
    getModifiedFiles,
    getFileContent,
};
