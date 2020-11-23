const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const exists = util.promisify(fs.exists);

const {validateChangelog} = require('./validate');

const validateRelease = async (changelog, branch) => {
    console.info(changelog);
    const folder = changelog.replace('CHANGELOG.md', '');

    const changelogContent = await readFile(changelog, {encoding: 'utf-8'});

    const {
        isUnreleased,
        version,
        date,
        skeleton,
    } = validateChangelog(changelogContent);

    if (isUnreleased) {
        throw new Error(`"${branch}" branch can't be unreleased`);
    }

    if (!version || version === 'Unreleased') {
        throw new Error(`"${branch}" branch should have a version`);
    }

    if (!date) {
        throw new Error(`"${branch}" branch should have a date`);
    }

    const {version: packageVersion} = JSON.parse(await readFile(`${folder}package.json`, {encoding: 'utf-8'}));
    if (packageVersion !== version) {
        throw new Error(`The package version "${packageVersion}" does not match the newest version "${version}"`);
    }

    if (await exists(`${folder}package-lock.json`)) {
        const {version: packageLockVersion} = JSON.parse(await readFile(`${folder}package-lock.json`, {encoding: 'utf-8'}));
        if (packageLockVersion !== version) {
            throw new Error(`The package-lock version "${packageVersion}" does not match the newest version "${version}"`);
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
        throw new Error('This release includes breaking changes, major version should be increased.');
    }
};

module.exports = {
    validateRelease,
};
