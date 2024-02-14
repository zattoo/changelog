const {readFile} = require('node:fs/promises');
const fs = require('node:fs');
const util = require('util');

const exists = util.promisify(fs.exists);

const {validateChangelog} = require('./validate.js');
const {getFileContent} = require('./files.js');

/**
 * Given the path of a changelog it will
 * validate if it's a correct release
 *
 * @param {string} changelog
 */
const validateRelease = async (changelog) => {
    const folder = changelog.replace('CHANGELOG.md', '');

    const changelogContent = await readFile(changelog, {encoding: 'utf-8'});

    const {
        isUnreleased,
        version,
        date,
        skeleton,
    } = validateChangelog(changelogContent);

    if (isUnreleased) {
        throw new Error(`A release branch can't have "Unreleased" version for changelog: ${changelog}`);
    }

    if (!version || version === 'Unreleased') {
        throw new Error(`A release branch should have a version for changelog ${changelog}`);
    }

    if (!date) {
        throw new Error(`A release branch should have a date for changelog: ${changelog}`);
    }

    const {version: packageVersion} = JSON.parse(await readFile(`${folder}package.json`, {encoding: 'utf-8'}));

    if (packageVersion !== version) {
        throw new Error(`The package version "${packageVersion}" does not match the newest version "${version}" of changelog: ${changelog}`);
    }

    if (await exists(`${folder}package-lock.json`)) {
        const {version: packageLockVersion} = JSON.parse(await readFile(`${folder}package-lock.json`, {encoding: 'utf-8'}));

        if (packageLockVersion !== version) {
            throw new Error(`The package-lock version "${packageVersion}" does not match the newest version "${version}" of changelog: ${changelog}`);
        }
    }

    // Validate if branch contains breaking changes
    // and version has the same major version as previous.
    const text = skeleton.versionText[version].map((v) => v.value).join();
    const previousVersion = skeleton.versions[1];

    if (
        text.includes('breaking change')
            && (previousVersion.value.split('.')[0] === version.split('.')[0])
    ) {
        throw new Error(`This release includes breaking changes, major version should be increased for changelog: ${changelog}`);
    }
};

/**
 * Compares the current version of the given changelog
 * with a previous version and validates in case is different.
 *
 * @param {Compare} param
 */
const compareChangelog = async ({
    octokit,
    repo,
    owner,
    path,
    base,
    branch,
}) => {
    const previousText = await getFileContent({
        octokit,
        repo,
        owner,
        path,
        ref: base,
    });
    const currentText = await getFileContent({
        octokit,
        repo,
        owner,
        path,
        ref: branch,
    });

    if (previousText && currentText) {
        const previousContent = validateChangelog(previousText);
        const currentContent = validateChangelog(currentText);

        if (
            !previousContent.isUnreleased &&
            !currentContent.isUnreleased &&
            previousContent.version !== currentContent.version
        ) {
            validateRelease(path);
        }
    }
};

module.exports = {
    compareChangelog,
    validateRelease,
};

/**
 * @typedef {Object} Compare
 * @prop {GithubObject} octokit
 * @prop {string} repo
 * @prop {string} owner
 * @prop {string} path
 * @prop {string} branch
 * @prop {string} base
 */

/** @typedef {import('@actions/github/lib/utils').GitHub} GithubObject */
