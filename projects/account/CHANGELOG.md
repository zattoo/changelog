# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Company Versioning](https://zattoo2.atlassian.net/wiki/spaces/BBEN/pages/302612481/Concept+Versions+in+Jira+and+Version+names).

## [1.3.1] - 27.10.2020

### Changed
- [WEB-1885](https://zattoo2.atlassian.net/browse/WEB-1885) Tooltips replaced with a new implementation
- [ZRS-1320](https://zattoo2.atlassian.net/browse/ZRS-1320) Logos for premium, ultimate and free

### Infrastructure
- Replaced deprecated `set-env` in GitHub Actions
- Reworked route actions to allow query parameters optional preserve

## [1.3.0] - 29.09.2020

### Changed
- [WEB-1837](https://zattoo2.atlassian.net/browse/WEB-1837) Enabled OneTrust feature

### Infrastructure
- Replaced `@zattoo/utils-time` with `@zattoo/time`
- Modified exceptions capturing

## [1.2.1] - 29.09.2020

Fixed malformed shop URLs

## [1.2.0] - 21.09.2020

### Added
- [WEB-1775](https://zattoo2.atlassian.net/browse/WEB-1775) TWA. Disable pull-to-refresh
- [ZRS-1280](https://zattoo2.atlassian.net/browse/WEB-1280) Edit billing address and download receipt button in billing history
- [WEB-1837](https://zattoo2.atlassian.net/browse/WEB-1837) OneTrust Consent service
- Focus indication

### Changed
- [WEB-1723](https://zattoo2.atlassian.net/browse/WEB-1723) Find and merge similar translations. Remove obsoletes icons keys & title
- [WEB-1718](https://zattoo2.atlassian.net/browse/WEB-1718) Own Account translations
- [WEB-1801](https://zattoo2.atlassian.net/browse/WEB-1801) Rework HTML template
- [WEB-1802](https://zattoo2.atlassian.net/browse/WEB-1802) Add `z-merge` bot
- [WEB-1693](https://zattoo2.atlassian.net/browse/WEB-1693) Maskable icons
- Manifest fingerprints
- Add Changelog action
- Moved Routes, Prompt & Page Meta features to Common
- Moved Checkbox, Cluster, Control Overflow, Field, TextField, PasswordField, Select, SelectField and Tabs Components to Common
- Moved `utils/time` and time component to common
- Updated TS & Babel related dependencies
- [WEB-1573](https://zattoo2.atlassian.net/browse/WEB-1573) Cookies disabled error handling

### Fixed
- Broken shadows

### Infrastructure
- Drop dependency on App
- [WEB-1765](https://zattoo2.atlassian.net/browse/WEB-1765) Moved history & config to common
- [WEB-1799](https://zattoo2.atlassian.net/browse/WEB-1799) Common Session
- [WEB-1798](https://zattoo2.atlassian.net/browse/WEB-1798) Common vendors chunk
- [WEB-1638](https://zattoo2.atlassian.net/browse/WEB-1638) Adopt next version of `@zattoo/utils-time`
- [WEB-1766](https://zattoo2.atlassian.net/browse/WEB-1766) Moved shopPaths to Common
- Decouple styles
- Rework initial data fetching sequence
- Moved Error, KeyHandler, Logo, Zattic Logo, NOT_FOUND path, utils:units & aspect-ratio, nominee/utils-time, guide/config to Common
- Common translations
- Moved error to Common

## [1.1.1] - 08.07.2020

[ZRS-1259](https://zattoo2.atlassian.net/browse/ZRS-1259) Fix crashes on interacting with controls after Google Translate

## [1.1.0] - 08.07.2020

### Added
- [WEB-1703](https://zattoo2.atlassian.net/browse/WEB-1703) Manifest
- [ZRS-1239](https://zattoo2.atlassian.net/browse/ZRS-1239) MGM logo

### Changed
- [WEB-1621](https://zattoo2.atlassian.net/browse/WEB-1621) Migrated to Session v3 API
- [WEB-1727](https://zattoo2.atlassian.net/browse/WEB-1727) Secondary Control color changed from hue 30 to hue 40
- [WEB-1701](https://zattoo2.atlassian.net/browse/WEB-1701) Account. Activate Replay V3

### Infrastructure
- Travis → GitHub Actions
- `dataSoul` → `soul`
- Decouple Controls from App
- [WEB-1665](https://zattoo2.atlassian.net/browse/WEB-1665) Run multiple projects locally

## [1.0.3] - 04.05.2020

### Fixed
- [ZRS-1196](https://zattoo2.atlassian.net/browse/ZRS-1196) Apply existing images to unknown service tile types

### Infrastructure
- Updated `@zattoo/eslint-config` to `9.0.0`

## [1.0.2] - 27.04.2020

### Added
- [ZRS-1180](https://zattoo2.atlassian.net/browse/ZRS-1180) Klarna payment method

### Changed
- Optimized and aligned logos of services and addons

### Updated
- @zattoo/zapi 2.1.7 -> 2.1.9

### Infrastructure
- Replacing `* 1000` with `secToMs`

## [1.0.1] - 24.03.2020

### Fixed
- Added favicons
- [ZRS-997](https://zattoo2.atlassian.net/browse/ZRS-997) Wrong currency is displayed on Billing history when a gifcode is used in DE
- [ZRS-1113](https://zattoo2.atlassian.net/browse/ZRS-1113) Typo in a translation string
- [ZRS-1069](https://zattoo2.atlassian.net/browse/ZRS-1069) Unclear error message for date of birth in small screen

### Infrastructure
- Major update of build packages
- Hyperion Core was replaced with Web Config successor

## [1.0.0] - 13.01.2020

### Infrastructure
- Initial setup
