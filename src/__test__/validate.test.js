/* eslint-disable no-empty */
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
        expect(version).toBe('1.0.0');
        expect(date).toBe('29.06.2020');
    });

    it('should throw error for not title present', () => {
        expect(() => validateChangelog('')).toThrow('No title is present');
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
        expect(compareSemVer(a, a)).toEqual(undefined);
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
