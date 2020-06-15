# 📋 Changelog Validate 
GitHub Action to validate CHANGELOG.md files and indicate if the changelog should be modified based on watch folders.

## Validations:
  - A h1 title must be present
  - Ony one h1 heading
  - Only one h2 with unreleased is allowed
  - h2 should contain a valid version or be unreleased
  - Versions should be in decremental order from top to bottom
  - It cannot contain two equal versions
  - Titles should have a correct number of spaces
  - H3 headings must be of a valid type
    - Added
    - Changed
    - Deprecated
    - Removed
    - Fixed
    - Security
    - Infrastructure
    - Updated
  
To avoid doing checks a commit with the message `-Changelog` should be in the pull request.

```bash
$ git commit --allow-empty -m "-Changelog"
```

## Inputs

### `token`

`string`

Required. GitHub token

### `changelogs`

`json string`

Required. Array with all changelogs and the folder that needs to be checked for changes

### `ignoreActionMessage`

`string`,  default: `-Changelog`

Commit message to avoid executing the action

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
          changelogs: '[{"watchFolder": "examples", "file": "examples/CHANGELOG.md"}]'
