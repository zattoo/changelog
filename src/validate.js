const core = require('@actions/core');

const changeTypes = [
    'Added',
    'Changed',
    'Deprecated',
    'Removed',
    'Fixed',
    'Security',
    'Infrastructure', // Custom
    'Updated', // Custom
];

/**
 * Obtains the version and date of the given heading
 * Capture Group 1: Version | Unreleased
 * Capture Group 2: Date | Unreleased
 *
 * @see https://regex101.com/r/ZQdEy6/1
 */
const reH2 = /^##\s\[?(Unreleased)\]?|^##\s\[((?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?:[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)\]\s*\W\s*(Unreleased|(?:\d\d?\d?\d?[-/.]\d\d?[-/.]\d\d?\d?\d))( \[YANKED\])?$/;

/**
 * Validates if the given text heading
 * has invalid spaces
 *
 * @param {string} text
 * @param {number} level
 * @returns {boolean}
 */
const checkHeadingSpaces = (text, level) => {
    const re = `^${'#'.repeat(level)}\\s([^\\s].*)$`;
    const regex = new RegExp(re, 'g');

    return regex.test(text);
};

/**
 * Checks if the given version is not released yet
 *
 * @param {string} version
 * @returns {boolean}
 */
const isPrerelease = (version) => {
    const lowerCasedVersion = version.toLowerCase();
    const preReleases = ['alpha', 'rc', 'beta', 'dev'];

    return preReleases.some((name) => lowerCasedVersion.includes(name));
};

/**
 * If the semver string a is greater than b, return 1.
 * If the semver string b is greater than a, return -1.
 * If the semver string a is equal to b, return 0.
 *
 * @param {string} a
 * @param {string} b
 * @returns {number}
 * @see https://github.com/substack/semver-compare
 */
// eslint-disable-next-line consistent-return
const compareSemVer = (a, b) => {
    // Special case for (x.x.x-x), present in a project
    if (a.split('-')[0] === b.split('-')[0]) {
        return 0;
    }

    const pa = a.split('.');
    const pb = b.split('.');

    for (let i = 0; i < 3; i += 1) {
        const na = Number(pa[i]);
        const nb = Number(pb[i]);

        if (na > nb) {
            return 1;
        }

        if (nb > na) {
            return -1;
        }

        if (!isNaN(na) && isNaN(nb)) {
            return 1;
        }

        if (isNaN(na) && !isNaN(nb)) {
            return -1;
        }
    }
};

/**
 * Validate if the given date is correct
 *
 * @param {string} date
 */
const validateDate = (date) => {
    const [year, month, day] = date.replace(/\./g, '-').split('-');

    const newDate = (Number(year) < 1000)
        ? Date.parse(`${day}-${month}-${year}`)
        : Date.parse(`${year}-${month}-${day}`);

    if (newDate) {
        return newDate;
    }

    return false;
};

/**
 *
 * @param {string} unreleased
 * @param {string} date
 */
const isUnreleased = (unreleased, date) => Boolean(unreleased) || date === 'Unreleased';

/** @param {string} text */
const getTitle = (text) => text.match(/^#[ ]{1,}(.+)$/) || [];
/** @param {string} text */
const isVersion = (text) => text.match(/^##[ ]{1,}.+/);
/** @param {string} text */
const isType = (text) => text.match(/^###[ ]{1,}.+/);

/**
 * Check all errors present in the given changelog
 *
 * @param {string} text
 */
const validateChangelog = (text) => {
    const errors = [];
    const skeleton = {
        titles: [],
        versions: [],
        versionsContent: {},
        versionText: {},
    };
    let lastVersion = null;

    const lines = text.split('\n');

    lines.forEach((line, i) => {
        const lineNumber = i + 1;
        const [, title] = getTitle(line);
        const version = isVersion(line);
        const type = isType(line);

        if (title) {
            skeleton.titles.push({
                value: title,
                lineNumber,
            });

            if (!checkHeadingSpaces(line, 1)) {
                errors.push({
                    message: 'Title has incorrect spaces',
                    lines: [lineNumber],
                });
            }

            if (lines[i - 1] !== undefined) {
                errors.push({
                    message: 'Title should be the fist line of the document',
                    lines: [lineNumber],
                });
            }
        } else if (version) {
            const [, unreleased, versionValue, date] = line.match(reH2) || [];

            if (!isUnreleased(unreleased, date)) {
                if (!line.includes(' - ')) {
                    errors.push({
                        message: 'Use a valid dash separation " - " between the version and date',
                        lines: [lineNumber],
                    });
                }

                if (!date) {
                    errors.push({
                        message: 'A valid date is required for a version',
                        lines: [lineNumber],
                    });
                }

                if (date && !validateDate(date)) {
                    errors.push({
                        message: `Date "${date}" is not valid`,
                        lines: [lineNumber],
                    });
                }
            }

            if (!checkHeadingSpaces(line, 2)) {
                errors.push({
                    message: 'Has incorrect spaces',
                    lines: [lineNumber],
                });
            }

            if (lines[i - 1] !== '') {
                errors.push({
                    message: 'A version heading needs an empty line before',
                    lines: [lineNumber],
                });
            }

            if (lines[i + 1] !== '') {
                errors.push({
                    message: 'A version heading needs an empty line after',
                    lines: [lineNumber],
                });
            }

            if (unreleased || versionValue) {
                skeleton.versions.push({
                    value: unreleased || versionValue,
                    lineNumber,
                    date: unreleased || date,
                });
            } else {
                errors.push({
                    message: 'Is not a valid version',
                    lines: [lineNumber],
                });
            }

            lastVersion = unreleased || versionValue;
        } else if (type) {
            const re = `^###\\s+(${changeTypes.join('|')})$`;
            const regex = new RegExp(re);

            const [, typeValue] = line.match(regex) || [];

            if (!typeValue) {
                errors.push({
                    message: `Is not a valid type of (${changeTypes.join('|')})`,
                    lines: [lineNumber],
                });
            } else {
                if (!skeleton.versionsContent[lastVersion]) {
                    skeleton.versionsContent[lastVersion] = [];
                }

                skeleton.versionsContent[lastVersion].push({
                    value: typeValue,
                    lineNumber,
                });
            }

            if (!checkHeadingSpaces(line, 3)) {
                errors.push({
                    message: 'Type has incorrect spaces',
                    lines: [lineNumber],
                });
            }

            if (lines[i - 1] !== '') {
                errors.push({
                    message: 'A type heading needs an empty line before',
                    lines: [lineNumber],
                });
            }

            if (lines[i + 1] === '') {
                errors.push({
                    message: 'A type heading can\'t have an empty line after',
                    lines: [lineNumber],
                });
            }
        } else if (line !== '' && lastVersion) {
            if (!skeleton.versionText[lastVersion]) {
                skeleton.versionText[lastVersion] = [];
            }

            skeleton.versionText[lastVersion].push({
                lineNumber,
                value: line,
            });
        }
    });

    // Title validations
    if (skeleton.titles.length === 0) {
        errors.push({
            message: 'No title is present',
        });
    } else if (skeleton.titles.length > 1) {
        errors.push({
            message: 'Only one title is allowed',
            lines: skeleton.titles.map((title) => title.lineNumber),
        });
    }

    // Check only one unreleased
    const unreleasedVersions = skeleton.versions.filter((version) => version.date === 'Unreleased');

    if (unreleasedVersions.length > 1) {
        errors.push({
            message: 'Only one unreleased version is permitted',
            lines: unreleasedVersions.map((version) => version.lineNumber),
        });
    }

    // Check if unreleased version is the first heading if present
    const unreleasedIndex = skeleton.versions.findIndex((version) => version.value.toLowerCase().includes('unreleased'));

    if (unreleasedIndex > 0) {
        errors.push({
            message: 'Unreleased version must be the fist version heading',
            lines: [skeleton.versions[unreleasedIndex].lineNumber],
        });
    }

    // Check repeated versions
    const repeatedCounts = skeleton.versions.reduce((acc, version) => {
        acc[version.value] = ++acc[version.value] || 0;

        return acc;
    }, {});

    const repeatedVersions = skeleton.versions.filter((e) => repeatedCounts[e.value]);

    if (repeatedVersions.length) {
        errors.push({
            message: 'Version repeated on lines',
            lines: repeatedVersions.map((version) => version.lineNumber),
        });
    }

    // Check if prev version is smaller than next
    skeleton.versions.forEach((version, i) => {
        if (skeleton.versions[i - 1]
            && skeleton.versions[i - 1].value !== 'Unreleased'
            && skeleton.versions[i - 1].value !== undefined
            && compareSemVer(skeleton.versions[i - 1].value, version.value) === -1
            && !isPrerelease(version.value)) {
            errors.push({
                message: 'Previous version can\'t be smaller than the next one',
                lines: [skeleton.versions[i - 1].lineNumber, version.lineNumber],
            });
        }
    });

    // Check duplicated headings for version
    Object.entries(skeleton.versionsContent).forEach(([version, headings]) => {
        const unrepeatedHeadings = new Set(headings.map((heading) => heading.value));

        if (unrepeatedHeadings.size !== headings.length) {
            errors.push({
                message: `Version "${version}" can't have repeated headings`,
                lines: [skeleton.versions.find((v) => v.value === version).lineNumber],
            });
        }
    });

    // Combine and throw errors
    if (errors.length) {
        /** @type {string[]} */
        const errorLog = [];

        errors.forEach((error) => {
            errorLog.push(`\n${error.message}`);

            if (error.lines) {
                error.lines.forEach((line, i) => {
                    errorLog.push((`${i === error.lines.length - 1 ? ' └─ ' : ' ├─ '}Line: ${line}, ${lines[line - 1]}`));
                });
            }
        });
        throw new Error(errorLog.join('\n'));
    }

    // Return the last version
    const latestVersion = skeleton.versions[0];

    /**
     *  Debug using `ACTIONS_STEP_DEBUG` to true
     *
     * @see https://github.com/actions/toolkit/blob/HEAD/docs/action-debugging.md#step-debug-logs
     */
    core.debug(JSON.stringify(skeleton));

    return {
        isUnreleased: isUnreleased(latestVersion.unreleased, latestVersion.date),
        version: latestVersion.value,
        date: latestVersion.date,
        skeleton,
    };
};

module.exports = {
    checkHeadingSpaces,
    compareSemVer,
    validateChangelog,
    validateDate,
    isPrerelease,
};
