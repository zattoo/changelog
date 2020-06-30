# 📋 Changelog Validate
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

To avoid doing checks a label with the message `-Changelog` should be in the pull request.

```bash
$ git commit --allow-empty -m "-Changelog"
```

## Inputs

### `token`

`string`

Required. GitHub token

### `files`

`json string`

Required. Array with all changelogs, packages.json files and the folder that needs to be checked for changes
Example : '[{"watchFolder": "examples", "changelog": "examples/CHANGELOG.md", "package": "package.json"}]'

### `ignoreActionMessage`

`string`,  default: `-Changelog`

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
      - name: Use changelog-validate action
        uses: dobladov/changelog-validate
        with:
          token: ${{ github.token }}
          files: '[{"watchFolder": "examples", "changelog": "examples/CHANGELOG.md", "package": "package.json"}]'
