# Changelog Validate 📋
GitHub Action to validate CHANGELOG.md files and notify in the case that needs to be modified.

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
