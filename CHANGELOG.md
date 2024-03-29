# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)

## [2.0.0] - 14.02.2024

### Infrastructure
- Upgraded from node `16` to `20`
- Replaced `@zeit/ncc` with `@vercel/ncc`
- Replaced `@glob` with `@fast-glob`

## [1.9.0] - 17.04.2022

### Infrastructure
- Update actions/checkout to v3
- @actions/core `1.2.6` -> `1.10.6`
- @actions/github `4.0.0` -> `5.1.1`
- glob `7.1.6` -> `8.0.3`
- wildcard-match `5.1.0` -> `5.1.2`
- @zattoo/eslint-config `11.0.4` -> `14.0.0`
- eslint `7.14.0` -> `8.25.0`
- eslint-config-airbnb-base `14.2.0` -> `15.0.0`
- jest `26.6.3` -> `29.2.0`

## [1.8.0] - 04.08.2022

### Added
- [65](https://github.com/zattoo/changelog/issues/65) Supported [Yanked](https://keepachangelog.com/en/1.0.0/#yanked) releases

### Fixed
- [60](https://github.com/zattoo/changelog/issues/60) Supported validation of separator between version and date

## [1.7.0] - 11.06.2021

### Added
- [51](https://github.com/zattoo/changelog/issues/51) Ignore files
- [37](https://github.com/zattoo/changelog/issues/37) Supported alpha version order and `Unreleased` check as first heading
- [49](https://github.com/zattoo/changelog/issues/49) Limited release branch to ask for modified files only of its own project

### Infrastructure
- Added `v1` back-syncs
- Added tests for releases

## [1.6.1] - 02.12.2020

Fixed errors not throwing

## [1.6.0] - 01.12.2020

Added multiple changelogs support

## [1.5.0] - 07.10.2020

### Added
-  Support nested release branches

## [1.4.0] - 15.09.2020

### Added
- Validate breaking changes
- Support version checking for hotfix branch

## [1.3.1] - 26.08.2020

### Fixed
- Validate wrong version headings

## [1.3.0] - 26.08.2020

### Added
- Validate empty lines

## [1.2.0] - 23.08.2020

### Added
- Check if a version has repeated headings

### Removed
- Commit status

### Infrastructure
- Update packages

## [1.1.0] - 30.07.2020

Support glob in sources

## [1.0.2] - 09.07.2020

Rename to Changelog Validate

## [1.0.1] - 03.07.2020

Make changelog optional

## [1.0.0] - 29.06.2020

### Added
Initial Functionality
