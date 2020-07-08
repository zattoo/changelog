# 📋 Changelog
GitHub Action to validate CHANGELOG.md files and indicate if the changelog should be modified based on watch folders.

## Validations:
  - A h1 title must be present
  - Only one h1 heading
  - Only one h2 with unreleased is allowed
  - H2 should contain a valid version or be unreleased
  - H2 heading should have a proper SemVer
  - H2 Should have valid dates
  - Versions should be in decremental order from top to bottom
  - It cannot contain two equal versions
  - Headings should have a correct number of spaces
  - H3 headings must be of a valid type
    - Added
    - Changed
    - Deprecated
    - Removed
    - Fixed
    - Security
    - Infrastructure
    - Updated
  - For "release" branch
    - Should have a valid date
    - Version should match package.json and package-lock.json
    - Can't be "Unreleased"

To avoid doing checks a label with the message `-changelog` should be in the pull request.

## Inputs

### `token`

`string`

Required. GitHub token

### `sources`

`array of strings`

Optional. String with folders to watch separated by commas
Example : 'projects/app/, projects/embed/, projects/account/'

### `ignoreActionLabel`

`string`,  default: `-changelog`

Pull request label name to avoid executing the action

## Usage Example

````yaml
on: [pull_request]

jobs:
  validate_changelog:
    runs-on: ubuntu-latest
    name: Validate Changelog
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use changelog action
        uses: zattoo/changelog
        with:
          token: ${{ github.token }}
          sources: ['src/projects/a', 'src/projects/b']
