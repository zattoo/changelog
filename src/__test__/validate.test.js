const fs = require('fs');

const {
  compareSemVer,
  validateChangelog,
  validateDate,
} = require('../validate');

const changelogContent = fs.readFileSync('./examples/CHANGELOG.md', { encoding: 'utf-8' });

describe('validateChangelog', () => {
  it('should be a valid changelog', () => {
    const { isUnreleased, version, date } = validateChangelog(changelogContent);
    expect(isUnreleased).toBe(false);
    expect(version).toBe('1.0.0');
    expect(date).toBe('29.06.2020');
  });

  it('should throw error for not title present', () => {
    try {
      validateChangelog('');
    } catch (error) {
      expect(error.message).toEqual('No title is present');
    }
  });

  const multipleH1 = fs.readFileSync('./src/__test__/changelogs/twoTitles.md', { encoding: 'utf-8' });

  it('should throw error for more than one title', () => {
    try {
      validateChangelog(multipleH1);
    } catch (error) {
      expect(error.message).toEqual('Only one title is allowed');
    }
  });

  const incorrectSpaces = fs.readFileSync('./src/__test__/changelogs/incorrectSpaces.md', { encoding: 'utf-8' });

  it('should throw error for incorrect spaces', () => {
    try {
      validateChangelog(incorrectSpaces);
    } catch (error) {
      expect(error.message).toEqual('Title has more than one space');
    }
  });

  const invalidH3Type = fs.readFileSync('./src/__test__/changelogs/invalidH3Type.md', { encoding: 'utf-8' });

  it('should throw error for wrong h3 type', () => {
    try {
      validateChangelog(invalidH3Type);
    } catch (error) {
      expect(error.message).toEqual('### Wrong is not a valid change type');
    }
  });

  const multipleUnreleased = fs.readFileSync('./src/__test__/changelogs/multipleUnreleased.md', { encoding: 'utf-8' });

  it('should throw error for multiple "Unreleased" heading', () => {
    try {
      validateChangelog(multipleUnreleased);
    } catch (error) {
      expect(error.message).toEqual('Only one unreleased heading is allowed');
    }
  });

  const releaseWithoutDate = fs.readFileSync('./src/__test__/changelogs/releaseWithoutDate.md', { encoding: 'utf-8' });

  it('should throw error for version without date', () => {
    try {
      validateChangelog(releaseWithoutDate);
    } catch (error) {
      expect(error.message).toEqual('A date is required for version "## [0.0.2]"');
    }
  });

  const olderVersionBefore = fs.readFileSync('./src/__test__/changelogs/olderVersionBefore.md', { encoding: 'utf-8' });

  it('should throw error for older version before newer version', () => {
    try {
      validateChangelog(olderVersionBefore);
    } catch (error) {
      expect(error.message).toEqual('The previous release "19/05/2020" can\'t be older than "20/05/2020"');
    }
  });

  const sameVersionRepeated = fs.readFileSync('./src/__test__/changelogs/sameVersionRepeated.md', { encoding: 'utf-8' });

  it('should throw error for same version repeated', () => {
    try {
      validateChangelog(sameVersionRepeated);
    } catch (error) {
      expect(error.message).toEqual('Version 0.0.1 can\'t be the same as a previous version');
    }
  });

  const nextVersionGreaterThanPrevious = fs.readFileSync('./src/__test__/changelogs/nextVersionGreaterThanPrevious.md', { encoding: 'utf-8' });

  it('should throw error for same version repeated', () => {
    try {
      validateChangelog(nextVersionGreaterThanPrevious);
    } catch (error) {
      expect(error.message).toEqual('Version 0.0.1 can\'t be smaller than a previous version');
    }
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
    try {
      validateDate('2020/05/28');
    } catch (error) {
      expect(error.message).toEqual('Invalid date "2020/05/28"');
    }
  });

  it('should throw error for invalid date 2', () => {
    try {
      validateDate('wrong');
    } catch (error) {
      expect(error.message).toEqual('Invalid date "wrong"');
    }
  });
});
