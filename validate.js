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
 * Check if there is only an unique title
 * @param {string} text 
 */
const validateH1 = (text) => {
    const titles = text.match(/^#(\s*\w*)$/gm) || []
    
    if (titles.length === 0) {
        throw(new Error('No title is present'))
    } else if (titles.length > 1) {
        throw(new Error('Only one title is allowed'))
    } else if (!checkHeadingSpaces(titles.slice(0, 1), 1)) {
        throw(new Error('Title has more than one space'))
    }
}

/**
 * Validades if the given text heading 
 * has invalid spaces
 * @param {string} text
 * @param {number} level
 * @returns {boolean}
 */
const checkHeadingSpaces = (text, level) => {
    const re = `^${'#'.repeat(level)}\\s([^\\s].*)$`
    const regex = new RegExp(re, 'g');
    return regex.test(text)
}

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
    for (var i = 0; i < 3; i++) {
        var na = Number(pa[i]);
        var nb = Number(pb[i]);
        if (na > nb) return 1;
        if (nb > na) return -1;
        if (!isNaN(na) && isNaN(nb)) return 1;
        if (isNaN(na) && !isNaN(nb)) return -1;
    }
}


/**
 * Validate H3 headings
 * @param {string} text 
 */
const validateH3 = (text) => {
    const headings = text.match(/^###(\s*\w*)$/gm) || []

    headings.forEach(heading => {
        const re = `^###\\s(${changeTypes.join('|')})$`
        const regex = new RegExp(re, 'g');

        if (!regex.test(heading)) {
            throw(new Error(`${heading} is not a valid change type`))
        } else if (!checkHeadingSpaces(heading, 3)) {
            throw(new Error(`${heading} has incorrect spaces`))
        }
    })
}

const validateH2 = (text) => {
    const headings = text.match(/^##\s.*$/gm) || []
    
    if (headings.filter(heading => heading.toLowerCase().includes('unreleased')).length > 1) {
        throw (new Error('Only one unreleased heading is allowed'));
    }
    
    let previousVersion
    headings.forEach(heading => {
        const [, currentVersion] = heading.match(/^##\s\[(\d+.\d+.\d+)\]/) || []

        if (
            !/^##\s\[*Unreleased\]*$/gm.test(heading) &&
            !/^##\s\[\d+.\d+.\d+\] - (\d+.\d+.\d+|\[*Unreleased\]*)$/gm.test(text)
        ) {
            throw (new Error(`${heading} is not valid`))
        } else if (!checkHeadingSpaces(heading, 2)) {
            throw(new Error(`${heading} has incorrect spaces`))
        }

        if (previousVersion && currentVersion) {
            const compare = compareSemVer(previousVersion, currentVersion)

            if (previousVersion === currentVersion) {
                throw(new Error(`Version ${previousVersion} can't be the same as a previous version ${currentVersion}`))
            } else if (compare === -1) {
                throw(new Error(`Version ${previousVersion} can't be smaller than a previous version ${currentVersion}`))
            } 
        }
        
        if (currentVersion) {
            previousVersion = currentVersion
        }
    })
}


const validateChangelog = (text) => {
    validateH1(text);
    validateH2(text);
    validateH3(text);
    console.info('✔️ All good')
    return true
}


module.exports = {
    validateChangelog
}
