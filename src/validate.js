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
 */
const reH2 = /^##\s\[?(Unreleased)\]?|^##\s\[((?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?:[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)\] - (Unreleased|(?:\d\d?\d?\d?[-/.]\d\d?[-/.]\d\d?\d?\d))$/;

/**
 * Validades if the given text heading
 * has invalid spaces
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
 * Check if there is only an unique title
 * @param {string} text
 */
const validateH1 = (text) => {
  const titles = text.match(/^#[ ]{1,}.+$/gm) || [];

  if (titles.length === 0) {
    throw new Error('No title is present');
  } else if (titles.length > 1) {
    throw new Error('Only one title is allowed');
  } else if (!checkHeadingSpaces(String(titles.slice(0, 1)), 1)) {
    throw new Error('Title has more than one space');
  }
};

/**
 * If the semver string a is greater than b, return 1.
 * If the semver string b is greater than a, return -1.
 * @param {string} a
 * @param {string} b
 * @returns {number}
 * @see https://github.com/substack/semver-compare
 */
const compareSemVer = (a, b) => {
  const pa = a.split('.');
  const pb = b.split('.');
  for (let i = 0; i < 3; i += 1) {
    const na = Number(pa[i]);
    const nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }
};

/**
 * Validate H3 headings
 * @param {string} text
 */
const validateH3 = (text) => {
  const headings = text.match(/^###(\s*\w*)$/gm) || [];

  headings.forEach((heading) => {
    const re = `^###\\s(${changeTypes.join('|')})$`;
    const regex = new RegExp(re, 'g');

    if (!regex.test(heading)) {
      throw new Error(`${heading} is not a valid change type`);
    } else if (!checkHeadingSpaces(heading, 3)) {
      throw new Error(`${heading} has incorrect spaces`);
    }
  });
};

/**
 * Validate if the given date is correct
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

  throw new Error(`Invalid date "${date}"`);
};

const isUnreleased = (unreleased, date) => Boolean(unreleased) || date === 'Unreleased';

/**
 * Validate H2 headings
 * @param {string} text
 * @returns {object}
 */
const validateH2 = (text) => {
  const headings = text.match(/^##\s.*$/gm) || [];

  if (headings.filter((heading) => heading.toLowerCase().includes('unreleased')).length > 1) {
    throw new Error('Only one unreleased heading is allowed');
  }

  let previousVersion;
  let previousDate;
  headings.forEach((heading) => {
    /** @see https://regex101.com/r/v5VmTx/2 */
    const [, unreleased, version, date] = heading.match(reH2) || [];

    const currentVersion = version;

    // Check if the date is valid
    if (!isUnreleased(unreleased, date)) {
      if (!date) {
        throw new Error(`A date is required for version "${heading}"`);
      }
      const currentDate = validateDate(date);

      if (previousDate && (previousDate < currentDate)) {
        throw new Error(`The previous release "${new Date(previousDate).toLocaleDateString()}" can't be older than "${new Date(currentDate).toLocaleDateString()}"`);
      }
      previousDate = currentDate;
    }

    if (previousVersion && currentVersion) {
      const compare = compareSemVer(previousVersion, currentVersion);

      if (previousVersion === currentVersion) {
        throw new Error(`Version ${previousVersion} can't be the same as a previous version`);
      } else if (compare === -1) {
        throw new Error(`Version ${previousVersion} can't be smaller than a previous version`);
      }
    }

    if (currentVersion) {
      previousVersion = currentVersion;
    }
  });

  // Return the newest heading information
  const [, unreleased, version, date] = headings[0].match(reH2) || [];
  return {
    isUnreleased: isUnreleased(unreleased, date),
    version,
    date,
  };
};

const validateChangelog = (text) => {
  validateH1(text);
  const newestHeading = validateH2(text);
  validateH3(text);
  return newestHeading;
};

module.exports = {
  checkHeadingSpaces,
  compareSemVer,
  validateChangelog,
  validateDate,
};
