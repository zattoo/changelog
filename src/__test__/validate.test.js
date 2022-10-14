const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const {
    compareSemVer,
    validateChangelog,
    validateDate,
} = require('../validate');

describe('validateChangelog', () => {
    it('should be a valid changelog', async () => {
        const changelogContent = await readFile('./src/__test__/changelogs/valid.md', {encoding: 'utf-8'});
        const {
            isUnreleased, version, date,
        } = validateChangelog(changelogContent);

        expect(isUnreleased).toBe(false);
        expect(version).toBe('2.0.0');
        expect(date).toBe('04.08.2022');
    });

    it('should throw error for not title present', () => {
        expect(() => validateChangelog('')).toThrow('No title is present');
    });

    it('should throw error for wrong separator', async () => {
        const wrongSeparator = await readFile('./src/__test__/changelogs/wrongSeparator.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(wrongSeparator)).toThrow('Use a valid dash separation " - " between the version and date');
    });

    it('should throw error for more than one title', async () => {
        const multipleH1 = await readFile('./src/__test__/changelogs/twoTitles.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(multipleH1)).toThrow('Only one title is allowed');
    });

    it('should throw error for incorrect spaces', async () => {
        const incorrectSpaces = await readFile('./src/__test__/changelogs/incorrectSpaces.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(incorrectSpaces)).toThrow('Title has incorrect spaces');
    });

    it('should throw error for wrong h3 type', async () => {
        const invalidH3Type = await readFile('./src/__test__/changelogs/invalidH3Type.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(invalidH3Type)).toThrow('Is not a valid type of (Added|Changed|Deprecated|Removed|Fixed|Security|Infrastructure|Updated)');
    });

    it('should throw error for multiple "Unreleased" heading', async () => {
        const multipleUnreleased = await readFile('./src/__test__/changelogs/multipleUnreleased.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(multipleUnreleased)).toThrow('Only one unreleased version is permitted');
    });

    it('should throw error for version without date', async () => {
        const releaseWithoutDate = await readFile('./src/__test__/changelogs/releaseWithoutDate.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(releaseWithoutDate)).toThrow('A valid date is required for a version');
    });

    it('should throw error for same version repeated', async () => {
        const sameVersionRepeated = await readFile('./src/__test__/changelogs/sameVersionRepeated.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(sameVersionRepeated)).toThrow('Version repeated on lines');
    });

    it('should throw error if the next version is greater than the previous', async () => {
        const nextVersionGreaterThanPrevious = await readFile('./src/__test__/changelogs/nextVersionGreaterThanPrevious.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(nextVersionGreaterThanPrevious)).toThrow('Previous version can\'t be smaller than the next one');
    });

    it('should throw error if for duplicated headings under the same version', async () => {
        const nextVersionGreaterThanPrevious = await readFile('./src/__test__/changelogs/duplicatedHeadings.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(nextVersionGreaterThanPrevious)).toThrow('Version "0.0.2" can\'t have repeated headings');
    });

    it('should throw error if for headings with incorrect empty lines', async () => {
        const nextVersionGreaterThanPrevious = await readFile('./src/__test__/changelogs/emptyLines.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(nextVersionGreaterThanPrevious)).toThrow('A version heading needs an empty line after');
    });

    /**
     * Release tests
     *
     * @see https://github.com/zattoo/changelog/issues/37
     */
    it('should throw error if wrong version was patched', async () => {
        const nextVersionGreaterThanPrevious = await readFile('./src/__test__/changelogs/release/wrongVersionWasPatched.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(nextVersionGreaterThanPrevious)).toThrow('Previous version can\'t be smaller than the next one');
    });

    it('should throw error if version was added in wrong timeline', async () => {
        const nextVersionGreaterThanPrevious = await readFile('./src/__test__/changelogs/release/versionWasAddedInWrongTimeline.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(nextVersionGreaterThanPrevious)).toThrow('Previous version can\'t be smaller than the next one');
    });

    it('should throw error if unreleased version placed between released versions', async () => {
        const nextVersionGreaterThanPrevious = await readFile('./src/__test__/changelogs/release/unreleasedVersionPlacedBetweenReleasedVersions.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(nextVersionGreaterThanPrevious)).toThrow('Unreleased version must be the fist version heading');
    });

    it('should throw error if merge conflict added by mistake in same versions', async () => {
        const nextVersionGreaterThanPrevious = await readFile('./src/__test__/changelogs/release/mergeConflictAddedByMistakeSameVersions.md', {encoding: 'utf-8'});

        expect(() => validateChangelog(nextVersionGreaterThanPrevious)).toThrow('Version repeated on lines');
    });

    it('should be valid if pre-release has greater version', async () => {
        const changelogContent = await readFile('./src/__test__/changelogs/release/ifPreReleaseHasGreaterVersion.md', {encoding: 'utf-8'});
        const {skeleton} = validateChangelog(changelogContent);

        expect(skeleton.versions[0].value).toBe('2.2.0');
        expect(skeleton.versions[1].value).toBe('3.0.0-rc.0');
    });
});

describe('compareSemVer', () => {
    const a = '1.0.0';
    const b = '1.0.1';

    it('should indicate that a is lower than b', () => {
        expect(compareSemVer(a, b)).toEqual(-1);
    });

    it('should indicate that b is higher than a', () => {
        expect(compareSemVer(b, a)).toEqual(1);
    });

    it('should indicate that a is equal to a', () => {
        expect(compareSemVer(a, a)).toEqual(0);
    });
});

describe('validateDate', () => {
    it('should verify that the date is valid', () => {
        expect(validateDate('2020-05-28')).toEqual(1590624000000);
    });

    it('should verify that the date is valid for different format', () => {
        expect(validateDate('28-05-2020')).toEqual(1590624000000);
    });

    it('should verify that the date is valid with different separator', () => {
        expect(validateDate('2020.05.28')).toEqual(1590624000000);
    });

    it('should throw error for invalid date', () => {
        expect(validateDate('2020/05/28')).toBe(false);
    });

    it('should throw error for invalid date 2', () => {
        expect(validateDate('wrong')).toBe(false);
    });
});
