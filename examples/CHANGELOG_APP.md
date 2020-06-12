# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Company Versioning](https://zattoo2.atlassian.net/wiki/spaces/BBEN/pages/302612481/Concept+Versions+in+Jira+and+Version+names).


## [3.2026.0] - Unreleased

### Added
- [WEB-1670](https://zattoo2.atlassian.net/browse/WEB-1670) Player Debug

### Changed
- Bitmovin updated to `8.36.0`
- [WEB-1677](https://zattoo2.atlassian.net/browse/WEB-1677) Autoplay blocking determination

### Removed
- [WEB-1691](https://zattoo2.atlassian.net/browse/WEB-1691) E2E. Remove 1und1 for optional tests (b2b)

### Fixed
- [WEB-1677](https://zattoo2.atlassian.net/browse/WEB-1677) Stream paused after ads finished

### Infrastructure
- [WEB-1692](https://zattoo2.atlassian.net/browse/WEB-1692) CI. Extend E2E keywords to support different projects
- `dataSoul` → `soul`

## [3.2024.0] - 09.06.2020

### Added
- [WEB-1592](https://zattoo2.atlassian.net/browse/WEB-1592) Cast control introduction
- [WEB-1658](https://zattoo2.atlassian.net/browse/WEB-1658) Replay seeking allowed permission
- [WEB-1500](https://zattoo2.atlassian.net/browse/WEB-1500) E2E. Zapping

### Changed
- [WEB-1621](https://zattoo2.atlassian.net/browse/WEB-1621) Migrated to Session v3 API
- [WEB-1624](https://zattoo2.atlassian.net/browse/WEB-1624) Migrated to new v3 Replay API
- [WEB-1625](https://zattoo2.atlassian.net/browse/WEB-1625) Migrated to new v3 Recording API
- [WEB-1662](https://zattoo2.atlassian.net/browse/WEB-1662) iPad determination separated from iOS. Direct usages of `isIOS` were replaced with configuration flags.
- Web Config updated to `10.2.0`

### Removed
- [WEB-1611](https://zattoo2.atlassian.net/browse/WEB-1611) Sandbox. Move feature to standalone project
- [WEB-1615](https://zattoo2.atlassian.net/browse/WEB-1615) Sandbox. Extract Sandbox E2E tests from app

### Fixed
- [WEB-1654](https://zattoo2.atlassian.net/browse/WEB-1654) Cover multi-channel series recording
- [WEB-1484](https://zattoo2.atlassian.net/browse/WEB-1484) Guide. Next/Prev controls change date instead of time in Guide (Remove Samsung fix)
- [WEB-1650](https://zattoo2.atlassian.net/browse/WEB-1650) Player. Default audio playing after casting
- [WEB-1642](https://zattoo2.atlassian.net/browse/WEB-1642) Player. Default subtitle changes to default after casting

### Infrastructure
- Teasers enhancement
- Move from `libsass` to `sass`
- Rename `SessionContext -> ImageContext` and move to `common`
- [WEB-1683](https://zattoo2.atlassian.net/browse/WEB-1683) Enforce node version in package
- [WEB-1663](https://zattoo2.atlassian.net/browse/WEB-1663) Sandbox. Menu Feature
- [WEB-1664](https://zattoo2.atlassian.net/browse/WEB-1664) Sandbox. Rebuild home page
- [WEB-1688](https://zattoo2.atlassian.net/browse/WEB-1688) E2E. Unify Cypress configuration and assets under `common`

## [3.2022.0] - 25.05.2020

### Added
- [WEB-1496](https://zattoo2.atlassian.net/browse/WEB-1496) Offline experience
- [WEB-1641](https://zattoo2.atlassian.net/browse/WEB-1641) Player. Immersive fullscreen

### Changed
- Web Config updated to `10.0.2`
- [WEB-1633](https://zattoo2.atlassian.net/browse/WEB-1633) Enlight non-active marquee teasers
- [WEB-1604](https://zattoo2.atlassian.net/browse/WEB-1604) Trim start and end white-space for email in login form

### Fixed
- [WEB-1646](https://zattoo2.atlassian.net/browse/WEB-1646) Recordings started not from program beginning
- [WEB-1646](https://zattoo2.atlassian.net/browse/WEB-1646) Play replay when recording is not finished
- [WEB-1659](https://zattoo2.atlassian.net/browse/WEB-1659) Video Ads. Not playing (iPad ONLY)
- [WEB-1493](https://zattoo2.atlassian.net/browse/WEB-1493) iOS. Ads finish, the video not return to full screen
- [WEB-1631](https://zattoo2.atlassian.net/browse/WEB-1631) Disable fullscreen while ads is playing on iOS devices
- [WEB-1510](https://zattoo2.atlassian.net/browse/WEB-1510) Scrolling. Editorial pages open with same scroll as the page before
- [WEB-1655](https://zattoo2.atlassian.net/browse/WEB-1655) `Guide` "Now" primetime button. Default position not set when landing on page from other menus (Firefox ONLY)

### Infrastructure
- Update `@zattoo/stylelint` to v4
- Update `cypress` to v4.5.0
- Added `backmerge-bot` configuration
- Replace use-double-click code with `@zattoo/use-double-click`
- Added 2 retries for all E2E tests
- Migrate `@zattoo/input`, `@zattoo/icon`, `@zattoo/loading-indicator` to `common`
- E2E. Changed resolution to `1280x800`, added 2 retries for all tests, recalibrate snapshots and removed resizeObserver Kludge
- Upgrade TS to 3.9 and type packages
- Add Release reporter

## [3.2020.0] - 11.05.2020

### Added
- [WEB-1633](https://zattoo2.atlassian.net/browse/WEB-1633) `senselan` aura support
- [WEB-1593](https://zattoo2.atlassian.net/browse/WEB-1593) E2E. Offline Page

### Changed
- [CRO-196](https://zattoo2.atlassian.net/browse/CRO-196) Web Config to `10.0.1`

### Fixed
- [WEB-1563](https://zattoo2.atlassian.net/browse/WEB-1563) OSD. Channels Sidebar triggers action-feedback
- [WEB-1634](https://zattoo2.atlassian.net/browse/WEB-1634) OSD. Fullscreen - Channels Sidebar opens on switch between linear and replay modes
- [WEB-1543](https://zattoo2.atlassian.net/browse/WEB-1543) Visual squeeze of radio control in Audio & Subtitles OSD when text is too long
- [WEB-1628](https://zattoo2.atlassian.net/browse/web-1628) Don't show empty Privacy Settings
- [WEB-1105](https://zattoo2.atlassian.net/browse/WEB-1105) Guide. Changing orientation causes multiple issues
- [WEB-1484](https://zattoo2.atlassian.net/browse/WEB-1484) Guide. Next/Prev controls change date instead of time in Guide (Tablets ONLY)
- [WEB-1637](https://zattoo2.atlassian.net/browse/WEB-1637) Prefer `event.code` instead of deprecated `event.which` for `keyHandler`
- [WEB-1640](https://zattoo2.atlassian.net/browse/WEB-1640) Stream unmuted on cast device even stream is muted from sender device
- [WEB-1636](https://zattoo2.atlassian.net/browse/WEB-1636) Fix non-selectable audio after cast finished
- [WEB-1643](https://zattoo2.atlassian.net/browse/WEB-1643) Subtitle not shown after casting

### Infrastructure
- Node.js engine raised to 14.1.0
- `@zattoo/eslint-config` updated to `9.0.0`
- Introduce date string to seconds converter utility

## [3.2018.0] - 27.04.2020

### Added
- [WEB-1583](https://zattoo2.atlassian.net/browse/WEB-1583) Optimize refresh logic for display ads to increase impressions
- [ZRW-1519](https://zattoo2.atlassian.net/browse/ZRW-1519), [WEB-1584](https://zattoo2.atlassian.net/browse/WEB-1584) Vertical Scroller. Enable scrolling to center
- [ZRW-1578](https://zattoo2.atlassian.net/browse/ZRW-1578), [ZRW-1568](https://zattoo2.atlassian.net/browse/ZRW-1568) New `device_time` field in latency measurement to filter clock drift devices
- [WEB-1514](https://zattoo2.atlassian.net/browse/WEB-1514) Session Error page
- [WEB-1560](https://zattoo2.atlassian.net/browse/ZRW-1560) Persistent OSD Hotkeys info
- [ZRW-1558](https://zattoo2.atlassian.net/browse/ZRW-1558) Sandbox. Tabs
- [WEB-1609](https://zattoo2.atlassian.net/browse/WEB-1609) Sandbox. `useDoubleClick` hook
- [WEB-1598](https://zattoo2.atlassian.net/browse/WEB-1598) Sandbox. Cluster a different amount of groups
- [WEB-1559](https://zattoo2.atlassian.net/browse/WEB-1559) E2E. Tabs
- [WEB-1599](https://zattoo2.atlassian.net/browse/WEB-1599) E2E. Cluster a different amount of groups
- [WEB-1607](https://zattoo2.atlassian.net/browse/WEB-1607) E2E. use-double-click

### Changed
- [WEB-1561](https://zattoo2.atlassian.net/browse/WEB-1561) OSD. Live control. Replace custom icon with one from web-config
- [WEB-1526](https://zattoo2.atlassian.net/browse/ZRW-1526) Meta description coming from Web Config now
- [WEB-1613](https://zattoo2.atlassian.net/browse/WEB-1613) Correct contrasting colors for `matterhorn` aura
- [WEB-1589](https://zattoo2.atlassian.net/browse/WEB-1589) Use watch response's latency measurement interval

### Fixed
- [CRO-184](https://zattoo2.atlassian.net/browse/CRO-184) Cast DE Timeshift resume position
- [WEB-1603](https://zattoo2.atlassian.net/browse/WEB-1603) VOD/Recordings. Cluster not correctly positioned on current season
- [WEB-1486](https://zattoo2.atlassian.net/browse/WEB-1486) Missing subtitle off label when casting
- [WEB-1606](https://zattoo2.atlassian.net/browse/WEB-1606) AD Block caused display advertisement errors
- [WEB-1619](https://zattoo2.atlassian.net/browse/WEB-1619) Video Ads. Midrolls. The Player gets stuck when an ad is coming.

### Infrastructure
- [WEB-1556](https://zattoo2.atlassian.net/browse/WEB-1556) Reworking and unit testing of Time component
- Consolidate all acknowledgment pages under one template
- Replace analysis code with `@zattoo/analysis`
- Replacing `* 1000` with `secToMs`

## [3.2016.1] - 27.04.2020

### Changed
- `@zattoo/web-config` to `9.2.0`

## [3.2016.0] - 14.04.2020

### Added
- [ZRW-1529](https://zattoo2.atlassian.net/browse/ZRW-1529) Guide. Restore last time position
- [ZRW-1560](https://zattoo2.atlassian.net/browse/ZRW-1560) Persist OSD upon Pause, Volume, Audio & Subtitles interaction
- [ZRW-1473](https://zattoo2.atlassian.net/browse/ZRW-1473) OSD. Double-click to seek and to toggle fullscreen
- [ZRW-1505](https://zattoo2.atlassian.net/browse/ZRW-1273) Notification for ZAPI error code 214 (too many failed login attempts)
- [ZRW-1542](https://zattoo2.atlassian.net/browse/ZRW-1542) Series Details. More suitable image sizes
- [ZRW-1271](https://zattoo2.atlassian.net/browse/ZRW-1271) VOD. Episode List Available State
- [ZRW-1269](https://zattoo2.atlassian.net/browse/ZRW-1269) VOD. Episode List Upcoming State
- [ZRW-1270](https://zattoo2.atlassian.net/browse/ZRW-1270) VOD. Episode List Bought State
- [ZRW-1273](https://zattoo2.atlassian.net/browse/ZRW-1273) VOD. Order single episode
- [ZRW-1341](https://zattoo2.atlassian.net/browse/ZRW-1341) VOD. More button to expand content description
- [ZRW-1566](https://zattoo2.atlassian.net/browse/ZRW-1566) E2E. Add indicator to teaser E2E test
- [ZRW-1523](https://zattoo2.atlassian.net/browse/ZRW-1523) Static test. Ensure presence of .well-known configs

### Changed
- [ZRW-1528](https://zattoo2.atlassian.net/browse/ZRW-1528) Guide. Datepicker reworked
- [ZRW-846](https://zattoo2.atlassian.net/browse/ZRW-846) Display Ads. Orientation updates
- [ZRW-1574](https://zattoo2.atlassian.net/browse/ZRW-1574) VOD. Improved Episode title in stream
- [ZRW-1535](https://zattoo2.atlassian.net/browse/ZRW-1535) VOD. Adjust color for rented and purchased indicator
- Carousel and Cluster. Changed scrolling range

### Removed
- [ZRW-1550](https://zattoo2.atlassian.net/browse/ZRW-1550) Highlighted Favorites A/B experiment

### Fixed
- [ZRW-1565](https://zattoo2.atlassian.net/browse/ZRW-1565) Player. Seek back via keyboard in Live stream for DE paid users
- VOD. Crash when clicking unsubscribed SVOD episode
- [WEB-1601](https://zattoo2.atlassian.net/browse/WEB-1601) Latency measurement doesn't stop when going from live to replay

### Infrastructure
- [ZRW-1571](https://zattoo2.atlassian.net/browse/ZRW-1571) Setup Sentry environments based on stages
- [ZRW-1562](https://zattoo2.atlassian.net/browse/ZRW-1562) E2E. Change full acceptance trigger keyword to `+test`
- Rework Windows Feature API
- Horizontal Scroller. Simplified scrolling calculation, added range parameter

## [3.2014.0] - 31.03.2020

### Added
- [ZRW-1518](https://zattoo2.atlassian.net/browse/ZRW-1518) Latency measurement for DASH live streams
- [ZRW-1465](https://zattoo2.atlassian.net/browse/ZRW-1465) Added back "parallax" effect to Recordings and VOD Series pages
- [ZRW-1467](https://zattoo2.atlassian.net/browse/ZRW-1467) VOD. Track order actions
- [ZRW-1524](https://zattoo2.atlassian.net/browse/ZRW-1524) VOD. Search Series
- [ZRW-1368](https://zattoo2.atlassian.net/browse/ZRW-1368) VOD. Collapsible information for series details
- [ZRW-1197](https://zattoo2.atlassian.net/browse/ZRW-1197) E2E. Add typed fixture for Editorial test

### Removed
- [ZRW-1022](https://zattoo2.atlassian.net/browse/ZRW-1022) PiP polyfill in favor of native Safari 13.1 implementation

### Fixed
- [ZRW-1424](https://zattoo2.atlassian.net/browse/ZRW-1424) Guide. "Now" position is lost on the switch to favorite with an empty state and switch back to category
- [ZRW-1470](https://zattoo2.atlassian.net/browse/ZRW-1470) NetMetrix. Minor tracking issues
- [ZRW-1555](https://zattoo2.atlassian.net/browse/ZRW-1555) Relative past 2 hours time output
- [ZRW-1557](https://zattoo2.atlassian.net/browse/ZRW-1557) Channels favorites editing
- VOD. adjust height for series teaser in Carousel view

### Infrastructure
- E2E. Fixed Favorites test
- E2E. Moved redirects tests from `login` to `redirects` suite
- Changed Vertical Scroller HOC API

## [3.2013.0] - 25.03.2020

### Added
- [ZRW-1504](https://zattoo2.atlassian.net/browse/ZRW-1504) Scroll to highlighted item on landing (guide & channels)
- [ZRW-1502](https://zattoo2.atlassian.net/browse/ZRW-1502) Scroll to highlighted Guide teaser while zapping
- [ZRW-1513](https://zattoo2.atlassian.net/browse/ZRW-1513) Zapping. disable when lineup has one available channel and locked channels
- [ZRW-1521](https://zattoo2.atlassian.net/browse/ZRW-1521) `.well-known` keys
- [ZRW-1193](https://zattoo2.atlassian.net/browse/ZRW-1193) VOD. Order content
- [ZRW-1202](https://zattoo2.atlassian.net/browse/ZRW-1202) VOD. Movie. Rental States
- [ZRW-1203](https://zattoo2.atlassian.net/browse/ZRW-1203) VOD. Movie. Bought State
- [ZRW-1204](https://zattoo2.atlassian.net/browse/ZRW-1204) VOD. Movie. Upcoming State
- [ZRW-1460](https://zattoo2.atlassian.net/browse/ZRW-1460) VOD. Movie. Available State

### Removed
- [ZRW-1509](https://zattoo2.atlassian.net/browse/ZRW-1509) Client side redirects in favor to server

### Fixed
- [ZRW-1490](https://zattoo2.atlassian.net/browse/ZRW-1490) Video Ads. Remove transparency from skip control
- [ZRW-1512](https://zattoo2.atlassian.net/browse/ZRW-1512) Guide. Prime time buttons overlapping guide-timeline
- [ZRW-1534](https://zattoo2.atlassian.net/browse/ZRW-1534) Prevent non-visible thumb updates
- [ZRW-1537](https://zattoo2.atlassian.net/browse/ZRW-1537) Series Cards have different height
- [ZRW-1531](https://zattoo2.atlassian.net/browse/ZRW-1531) VOD. Non Zero rating values
- [ZRW-1538](https://zattoo2.atlassian.net/browse/ZRW-1538) Scroller. Misplaced next button that does not work
- [ZRW-1549](https://zattoo2.atlassian.net/browse/ZRW-1549) VOD. Corrected sku to service type subscription parameter
- [ZRW-1551](https://zattoo2.atlassian.net/browse/ZRW-1551) Media Session set position leading to app crashes

### Infrastructure
- Major update of build packages
- Hyperion Core was replaced with Web Config successor
- Validate Anchor target type
- Added interval hook
- Removed broken images custom UI
- Removed `HashBuster` component

### Changed
- [ZRW-1507](https://zattoo2.atlassian.net/browse/ZRW-1507) Retrieve application token from JSON

## [3.2012.0] - 16.03.2020

### Added
- [ZRW-1448](https://zattoo2.atlassian.net/browse/ZRW-1448) Mobile Display Advertisement
- [ZRW-684](https://zattoo2.atlassian.net/browse/ZRW-684) Scroll to highlighted Channel teaser while zapping
- [ZRW-1457](https://zattoo2.atlassian.net/browse/ZRW-1457) Avoid 404 directly after successful login
- [ZRW-1464](https://zattoo2.atlassian.net/browse/ZRW-1464) Invalid locale authentication error message and page
- [ZRW-1201](https://zattoo2.atlassian.net/browse/ZRW-1201) VOD. Movie Search
- [ZRW-1186](https://zattoo2.atlassian.net/browse/ZRW-1186) VOD. Watch Episode or Trailer
- [ZRW-1472](https://zattoo2.atlassian.net/browse/ZRW-1472) VOD. Deeplinks to watch episode and movie
- [ZRW-1435](https://zattoo2.atlassian.net/browse/ZRW-1435) E2E. Intro teaser, Link Teaser

### Changed
- [ZRW-1501](https://zattoo2.atlassian.net/browse/ZRW-1501) Zapping. Handle disabled cases & match Preview and Live Top OSD
- [PS-81](https://zattoo2.atlassian.net/browse/PS-81) OSD. `playPause` setting to `pause`

### Fixed
- [ZRW-1499](https://zattoo2.atlassian.net/browse/ZRW-1499) Zapping to locked Channels shows wrong EPG
- [ZRW-1483](https://zattoo2.atlassian.net/browse/ZRW-1483) Misconfigured element style handling
- [ZRW-1487](https://zattoo2.atlassian.net/browse/ZRW-1487) VOD. Series teaser missing click handler in marquee
- [ZRW-1491](https://zattoo2.atlassian.net/browse/ZRW-1491) Recordings. Enable series recording for large amount of recordings.
- [ZRW-1483](https://zattoo2.atlassian.net/browse/ZRW-1483) VOD. Empty marquee throws error on resize

### Infrastructure
- Added `20minutes` aura delivery
- Rename Modal to Prompt
- Align sequence of deploy jobs
- Updated `@zattoo/zapi` to `2.1.5`
- Updated `@zattoo/check-structure` to `1.0.0-rc.0`

## [3.2010.3] - 13.03.2020

Bump up the version of hyperion core to 7.2.2 to consider the recent configurations for missing auras

## [3.2010.2] - 10.03.2020

[ZRW-1495](https://zattoo2.atlassian.net/browse/ZRW-1495) Fix Guide updates and live images

## [3.2010.1] - 09.03.2020

[ZRW-1488](https://zattoo2.atlassian.net/browse/ZRW-1488) Fix Edge app crashes related to `smoothscroll-polyfill` removal

## [3.2010.0] - 02.03.2020

### Added
- [ZRW-1449](https://zattoo2.atlassian.net/browse/ZRW-1449) Support of amb, bbv, ewgoms, saktv, glattwerk, vtxtv, lampert, mnet, ewe, osnatel, swb and quantumtv partners
- [ZRW-1375](https://zattoo2.atlassian.net/browse/ZRW-1375) Media Session support
- [ZRW-1350](https://zattoo2.atlassian.net/browse/ZRW-1350) Using centralised ISO code map for audio & subtitle names
- [ZRW-1366](https://zattoo2.atlassian.net/browse/ZRW-1366) Theming support for Empty Search image
- [ZRW-1316](https://zattoo2.atlassian.net/browse/ZRW-1316) Guide performance optimizations
- [ZRW-1184](https://zattoo2.atlassian.net/browse/ZRW-1184) VOD. Series Teaser
- [ZRW-1381](https://zattoo2.atlassian.net/browse/ZRW-1381) VOD. Series Episode teaser
- [ZRW-1358](https://zattoo2.atlassian.net/browse/ZRW-1358) VOD. Series Bookmarks
- [PS-45](https://zattoo2.atlassian.net/browse/PS-45) Embed. Optional Program Details appearing in teasers list
- [ZRW-1454](https://zattoo2.atlassian.net/browse/ZRW-1454) E2E. VOD-Series Teaser
- [ZRW-1461](https://zattoo2.atlassian.net/browse/ZRW-1461) E2E. Teasers - Visual tests for mobile viewport

### Changed
- [ZRW-1446](https://zattoo2.atlassian.net/browse/ZRW-1446) Better Images & Thumbs handling
- [PS-41](https://zattoo2.atlassian.net/browse/PS-41) Apple device determination

### Fixed
- [ZRW-1440](https://zattoo2.atlassian.net/browse/ZRW-1440) French, Spanish and Italian languages support in time output
- [ZRW-1458](https://zattoo2.atlassian.net/browse/ZRW-1458) Hotwire thumbnails baseUrl

### Infrastructure
- Removed `smoothscroll-polyfill`
- Replace size-test with Build analysis
- TypeScript updated to 3.8+
- Added Cleaning scripts
- Added `cypress-plugin-retries`

## [3.2008.0] - 17.02.2020

### Added
- [ZRW-1185](https://zattoo2.atlassian.net/browse/ZRW-1185) VOD. Series Detail Page
- [ZRW-1356](https://zattoo2.atlassian.net/browse/ZRW-1356) Season-Episode Notation for TV Series
- [ZRW-1327](https://zattoo2.atlassian.net/browse/ZRW-1327) Channels: dynamic collapsing and expanding of UI bars
- [ZRW-1326](https://zattoo2.atlassian.net/browse/ZRW-1326) Guide: dynamic collapsing and expanding of UI bars
- [PS-46](https://zattoo2.atlassian.net/browse/PS-46) Program Details link appearance in teaser-channel
- [PS-55](https://zattoo2.atlassian.net/browse/PS-55) Video Ads. Counter setting.
- [ZRW-1379](https://zattoo2.atlassian.net/browse/ZRW-1379) E2E. Channel Teaser
- [ZRW-1277](https://zattoo2.atlassian.net/browse/ZRW-1277) E2E. Broadcast Teaser
- [ZRW-1431](https://zattoo2.atlassian.net/browse/ZRW-1431) E2E. AVOD Teaser
- [ZRW-1434](https://zattoo2.atlassian.net/browse/ZRW-1434) E2E. Generic Teaser
- [ZRW-1432](https://zattoo2.atlassian.net/browse/ZRW-1432) E2E. Series Teaser
- [ZRW-1433](https://zattoo2.atlassian.net/browse/ZRW-1433) E2E. Series-Episode Teaser

### Changed
- [ZRW-1408](https://zattoo2.atlassian.net/browse/ZRW-1408) Carousel & Grid teasers dimensions
- Legacy Browsers Page. Opera was changed in favor to Edge
- [ZRW-1445](https://zattoo2.atlassian.net/browse/ZRW-1445) Improved Movie teaser properties passing

### Fixed
- [ZRW-1403](https://zattoo2.atlassian.net/browse/ZRW-1403) Incorrect breadcrumb value
- [ZRW-1441](https://zattoo2.atlassian.net/browse/ZRW-1441) Fix link to account in forbidden replay message
- [ZRW-1349](https://zattoo2.atlassian.net/browse/ZRW-1349) Zapping to a new category, plays to the 2nd channel instead the 1st
- [ZRW-1348](https://zattoo2.atlassian.net/browse/ZRW-1348) Zapping to a category with just blocked channels show upgrade message
- Interaction with OSD progress bar on touch devices
- Fix build error in lab environment for partners
- Identification of an airing program
- Relative time output

### Infrastructure
- [ZRW-1394](https://zattoo2.atlassian.net/browse/ZRW-1394) Sandbox. Teaser. Single Teaser Mode
- Updated `cypress` to `3.8.3`
- `@zattoo/hyperion-core` updated to `7.1.2`
- Updated E2E Snapshots for control, cluster, radio and checkbox
- Minor Guide optimizations

## [3.2006.2] - 10.02.2020

[ZRW-1428](https://zattoo2.atlassian.net/browse/ZRW-1428) Fixed switching from Replay to Live

## [3.2006.1] - 10.02.2020

Extend static meta information

## [3.2006.0] - 03.02.2020

### Added
- [ZRW-770](https://zattoo2.atlassian.net/browse/ZRW-770) Swipe to Zap feature
- [ZRW-1367](https://zattoo2.atlassian.net/browse/ZRW-1367) A/B test. Highlighted favorites
- [ZRW-1369](https://zattoo2.atlassian.net/browse/ZRW-1369) Specific event labels for zapping via keyboard shortcuts and via swipe gesture
- Missing system font family fallback

### Changed
- [ZRW-1353](https://zattoo2.atlassian.net/browse/ZRW-1353) Optimize OSD Top Logo format
- [ZRW-1376](https://zattoo2.atlassian.net/browse/ZRW-1376) OSD Close control always present

### Removed
- [ZRW-1318](https://zattoo2.atlassian.net/browse/ZRW-1318) Channels Home experiment

### Fixed
- [ZRW-1264](https://zattoo2.atlassian.net/browse/ZRW-1264) Extra Display Ads requests
- [ZRW-1365](https://zattoo2.atlassian.net/browse/ZRW-1365) Search. Cluster should show only available Categories
- [ZRW-1374](https://zattoo2.atlassian.net/browse/ZRW-1374) Cluster. Scroll to component out of viewport
- Marquee handles appearance of ads sidebar

### Infrastructure
- Separate tests to "acceptance" and "e2e" chunks
- Rename `e2e` hook for running full cycle to `test`
- [ZRW-1346](https://zattoo2.atlassian.net/browse/ZRW-1346) Add local aura config & translations overrides support to all projects
- Update @zattoo/stylelint-config to `3.3.0`
- Removed `page-lifecycle` feature

## [3.2004.3] - 30.01.2020

### Changed
- Corporate redirects output moved to static HTML rendering
- Switched off Hotjar

### Fixed
- Redundant button title in manage favorites

## [3.2004.2] - 24.01.2020

[ZRW-1371](https://zattoo2.atlassian.net/browse/ZRW-1371) Add dynamic canonical to root redirect page

## [3.2004.1] - 24.01.2020

[ZRW-1371](https://zattoo2.atlassian.net/browse/ZRW-1371) Remove static root canonical

## [3.2004.0] - 20.01.2020

### Added
- [ZRW-1318](https://zattoo2.atlassian.net/browse/ZRW-1318) A/B Tests
- [ZRW-1313](https://zattoo2.atlassian.net/browse/ZRW-1313) SameSite strict policy to client side cookies
- [ZRW-1246](https://zattoo2.atlassian.net/browse/ZRW-1246) Limit messages to one unique per time
- [PS-50](https://zattoo2.atlassian.net/browse/PS-50) Configurations for Video Advertisement
- [ZRW-1354](https://zattoo2.atlassian.net/browse/ZRW-1354) VOD. Unified pathname for all vod content
- [ZRW-1303](https://zattoo2.atlassian.net/browse/ZRW-1303) E2E. Sandbox. Cluster

### Changed
- [ZRW-1302](https://zattoo2.atlassian.net/browse/ZRW-1302) E2E. Use `.js` files for type safe fixtures

### Fixed
- [ZRW-1360](https://zattoo2.atlassian.net/browse/ZRW-1360) New Edge (Chromium based) handling
- [ZRW-1362](https://zattoo2.atlassian.net/browse/ZRW-1362) Guide. Timeline scroll for mobile devices
- [ZRW-1292](https://zattoo2.atlassian.net/browse/ZRW-1292) NetMetrix. Event Tracking

### Fixed
- [ZRW-1170](https://zattoo2.atlassian.net/browse/ZRW-1170) display ads restoration on cached pages

### Infrastructure
- Project specific dependencies installation

## [3.2002.2] - 15.01.2020

[ZRW-1352](https://zattoo2.atlassian.net/browse/ZRW-1352) Bitmovin player downgrade back to `8.14.1`

## [3.2002.1] - 15.01.2020

[ZRW-1343](https://zattoo2.atlassian.net/browse/ZRW-1343) Support Monaco aura

### Changed
- [ZRW-1323](https://zattoo2.atlassian.net/browse/ZRW-1323) Support high resolution background for movie teaser

## [3.2002.0] - 08.01.2020

### Added
- [ZRW-1290](https://zattoo2.atlassian.net/browse/ZRW-1290) Show Play Icon on Playable VOD Movies
- [ZRW-1247](https://zattoo2.atlassian.net/browse/ZRW-1247) Subscription required authentication error handling
- [ZRW-1206](https://zattoo2.atlassian.net/browse/ZRW-1206) VOD. Content Bookmark
- [ZRW-1113](https://zattoo2.atlassian.net/browse/ZRW-1113) VOD. Watch Trailer
- [ZRW-1205](https://zattoo2.atlassian.net/browse/ZRW-1205) E2E. Player. Live Stream
- [ZRW-1244](https://zattoo2.atlassian.net/browse/ZRW-1244) E2E. VOD Movie details
- [ZRW-1198](https://zattoo2.atlassian.net/browse/ZRW-1198) E2E. Program Details
- [ZRW-1314](https://zattoo2.atlassian.net/browse/ZRW-1314) E2E. Subscription Required Authentication Error
- [ZRW-1206](https://zattoo2.atlassian.net/browse/ZRW-1206) VOD. Content Bookmark

### Changed
- `@zattoo/hyperion-core` updated to `7.0.3`
- [ZRW-1297](https://zattoo2.atlassian.net/browse/ZRW-1297) VOD. Subscription deeplink to shop
- [ZRW-1319](https://zattoo2.atlassian.net/browse/ZRW-1319) Bitmovin player updated to `8.25.1`. Remove Safari startOffset kludge

### Fixed
- [ZRW-1283](https://zattoo2.atlassian.net/browse/ZRW-1283) VOD. Ratings in Edge
- [ZRW-1295](https://zattoo2.atlassian.net/browse/ZRW-1295) Duration time determination for SVOD trailer
- [ZRW-1288](https://zattoo2.atlassian.net/browse/ZRW-1288) Total Recordings 0 Hours output
- [ZRW-1315](https://zattoo2.atlassian.net/browse/ZRW-1315) Program Details. blank space when there is no elements
- [ZRW-1306](https://zattoo2.atlassian.net/browse/ZRW-1306) Editorial. Logo style for marquee/carousel channel teaser
- [ZRW-1322](https://zattoo2.atlassian.net/browse/ZRW-1322) VOD. Teasers watch progress
- [ZRW-1339](https://zattoo2.atlassian.net/browse/ZRW-1339) Recordings PIN protection error

### Infrastructure
- Independent Account
- Common Source
- Added generation of `d.ts` files
- Updated path resolution rules to match the new multi-project structure
- Extract Window logic from Entrance
- Updated `cypress` to `3.8.1`
- `cypress-wait-until`
- E2E. Optional. features as directories names
- Removed `changelog-verifier`
- Grouped global variables under a namespace
- Native evaluation of a Node's ES modules
- Align Selectors structure
- Change e2e paths alias from `e2e` to `@app/e2e`
- Move `cypress` folder to project folder.
- Added Lighthouse CI
- Separate E2E Tests from master flow
- Update to `@zattoo/build-utils` v7
- Generation of an SVG sprite is performed by a custom Webpack plugin
- Project specific publishing with `@zattoo/zploy@1.0.0-rc.0`
- [ZRW-1162](https://zattoo2.atlassian.net/browse/ZRW-1162) Add `@zattoo/check-structure` package
- [ZRW-1324](https://zattoo2.atlassian.net/browse/ZRW-1324) Updated to use HLS7 instead of HLS5
- Updated `@zattoo/zapi` to `1.17.4`

## [3.1950.4] - 02.01.2020

### Fixed
- [ZRW-1310](https://zattoo2.atlassian.net/browse/ZRW-1310) Closing Cinema after zapping
- [ZRW-1308](https://zattoo2.atlassian.net/browse/ZRW-1308) Skipping via keyboard uses wrong time reference
- [ZRW-1307](https://zattoo2.atlassian.net/browse/ZRW-1307) Mobile appearance of branding day close control
- [ZRW-1060](https://zattoo2.atlassian.net/browse/ZRW-1060) Newly activated Replay Error

## [3.1950.3] - 23.12.2019

### Fixed
- [ZRW-1305](https://zattoo2.atlassian.net/browse/ZRW-1305) Ads offset determination

## [3.1950.2] - 19.12.2019

### Fixed
- [ZRW-1305](https://zattoo2.atlassian.net/browse/ZRW-1305) Fix Ads skippability
- [ZRW-1300](https://zattoo2.atlassian.net/browse/ZRW-1300) Missing canonicals

## [3.1950.1] - 17.12.2019

### Changed
- `@zattoo/hyperion-core` updated to `6.0.3`

### Fixed
- [ZRW-1294](https://zattoo2.atlassian.net/browse/ZRW-1294) Amazon header bidding configuration

### Infrastructure
- [ZRW-1294](https://zattoo2.atlassian.net/browse/ZRW-1294) Add header bidding e2e test

## [3.1950.0] - 11.12.2019

### Added
- [ZRW-1235](https://zattoo2.atlassian.net/browse/ZRW-1235) Cluster. Scroll to current Category
- [ZRW-1151](https://zattoo2.atlassian.net/browse/ZRW-1151) Legacy browsers info page
- [ZRS-973](https://zattoo2.atlassian.net/browse/ZRS-973) Add Filmtastik package logo
- [ZRW-1267](https://zattoo2.atlassian.net/browse/ZRW-1267) Proper Netmetrix tracking
- [ZRW-1261](https://zattoo2.atlassian.net/browse/ZRW-1261) Missing scenarios for PVR only recordings

### Fixed
- [ZRW-1279](https://zattoo2.atlassian.net/browse/ZRW-1279) Unsupported flat function for Edge browser
- [ZRW-1280](https://zattoo2.atlassian.net/browse/ZRW-1280) VOD. Cinema mode unavailable
- [ZRW-1287](https://zattoo2.atlassian.net/browse/ZRW-1287) General error message when recordings storage is full
- [ZRW-1289](https://zattoo2.atlassian.net/browse/ZRW-1289) Welcome Background occupies all area

### Infrastructure
- [ZRW-1257](https://zattoo2.atlassian.net/browse/ZRW-1257) E2E - visual test - dynamically allocate expected snapshot for aura
- Updated `@zattoo/hyperion-core` to `v6.0.2`
- Remove `blossom` environment in favor to `b2bqa` and `qa`

## [3.1949.2] - 13.12.2019

### Fixed
- [ZRW-1279](https://zattoo2.atlassian.net/browse/ZRW-1279) Unsupported flat function for Edge browser

## [3.1949.1] - 12.12.2019

### Changed
- [ZRW-1281](https://zattoo2.atlassian.net/browse/ZRW-1281) App TID for `1und1`, `monaco`, `amb`, `ewgoms`, `glattwerk` and `glattvision`

## [3.1949.0] - 04.12.2019

### Added
- [ZRW-948](https://zattoo2.atlassian.net/browse/ZRW-948) Persistent Media View
- [ZRW-1236](https://zattoo2.atlassian.net/browse/ZRW-1236) Link-out to external VOD service
- [ZRW-1110](https://zattoo2.atlassian.net/browse/ZRW-1110), [ZRW-1115](https://zattoo2.atlassian.net/browse/ZRW-1115), [ZRW-1199](https://zattoo2.atlassian.net/browse/ZRW-1199) VOD. Movie Teaser
- [ZRW-1110](https://zattoo2.atlassian.net/browse/ZRW-1110), [ZRW-1115](https://zattoo2.atlassian.net/browse/ZRW-1115) VOD. Movie Teaser
- [ZRW-1222](https://zattoo2.atlassian.net/browse/ZRW-1222) VOD. Movie Subscribable State
- [ZRW-1114](https://zattoo2.atlassian.net/browse/ZRW-1114) VOD. Movie simple SVOD order
- [ZRW-1112](https://zattoo2.atlassian.net/browse/ZRW-1112) VOD. Watch Movie
- [ZRW-1252](https://zattoo2.atlassian.net/browse/ZRW-1252) VOD. Enable feature for `zattoo`
- [ZRW-1254](https://zattoo2.atlassian.net/browse/ZRW-1254) VOD. Brand message for subscribed content

### Fixed
- [ZRW-1211](https://zattoo2.atlassian.net/browse/ZRW-1211) NetMetrix. Render tracking image only for Swiss users
- [ZRW-867](https://zattoo2.atlassian.net/browse/ZRW-867) Channels sidebar. Cluster tabs. Sync with Channels and Guide pages
- [ZRW-1238](https://zattoo2.atlassian.net/browse/ZRW-1238) VOD. Corrected package name for subscription terms
- [ZRW-1259](https://zattoo2.atlassian.net/browse/ZRW-1259) VOD. Preserved watch progress of SVOD movies

### Infrastructure
- [ZRW-1242](https://zattoo2.atlassian.net/browse/ZRW-1242) - eslint - components should not have access to state
- Fix `embed` app tid defined for `1und1` instead of `zattoo`
- Updated `cypress` to `3.7.0`
- Updated `@zattoo/eslint-config` to `8.0.0`

## [3.1948.0] - 25.11.2019

### Added
- [ZRW-1174](https://zattoo2.atlassian.net/browse/ZRW-1174) Remote scheduling: warning when recorder storage is full or overscheduled
- [ZRW-1210](https://zattoo2.atlassian.net/browse/ZRW-1210) Display notification when a channel can be viewed only under a certain network
- [ZRW-780](https://zattoo2.atlassian.net/browse/ZRW-780) Notification for WAN network loss
- [ZRW-1111](https://zattoo2.atlassian.net/browse/ZRW-1111) VOD Movie Details UI
- [ZRW-1141](https://zattoo2.atlassian.net/browse/ZRW-1141) E2E. Channels
- [ZRW-1229](https://zattoo2.atlassian.net/browse/ZRW-1229) E2E. Visual tests for Radio and Checkbox Components
- [ZRW-1239](https://zattoo2.atlassian.net/browse/ZRW-1239) Canonicals links support

### Changed
- [ZRW-1181](https://zattoo2.atlassian.net/browse/ZRW-1181) Video Ads Clickable area now opens advertiser URL instead of play pause in desktop

### Fixed
- [ZRW-1180](https://zattoo2.atlassian.net/browse/ZRW-1180) TVSA appearance
- [ZRW-1233](https://zattoo2.atlassian.net/browse/ZRW-1233) Personalised ads determination
- [ZRW-1219](https://zattoo2.atlassian.net/browse/ZRW-1219) Glitches while scrolling a drilldown page on iOS

### Infrastructure
- [ZRW-1218](https://zattoo2.atlassian.net/browse/ZRW-1218) Move all stable configurations to @zattoo/hyperion-core
- [ZRW-1223](https://zattoo2.atlassian.net/browse/ZRW-1223) Added TestCases ID's to E2E Tests
- Optional Chaining syntax
- Replaced input component with `@zattoo/input`
- Partially replaced icon component with `@zattoo/icon`
- Extend app tids with `default` and `embed` fields
- E2E. Fixtures
- Updated `cypress` to `3.6.1`
- Updated typescript to `v3.7.2`
- E2E. Updated Snapshots
- Consolidated scripts. Dev tools type checking
- Added dependabot configuration
- Rename config/default.js

## [3.1946.1] - 26.11.2019

### Fixed
- [ZRW-1240](https://zattoo2.atlassian.net/browse/ZRW-1240) Guide: overlapping programs

## [3.1946.0] - 12.11.2019

### Added
- [ZRW-1189](https://zattoo2.atlassian.net/browse/ZRW-1189) Display of truncated Device ID (UUID) in settings
- [ZRW-1116](https://zattoo2.atlassian.net/browse/ZRW-1116) Analytics. Event tracking for category recording
- [ZRW-1179](https://zattoo2.atlassian.net/browse/ZRW-1179) E2E. Menu
- [ZRW-1076](https://zattoo2.atlassian.net/browse/ZRW-1076) E2E. Extend Authentication
- [ZRW-1150](https://zattoo2.atlassian.net/browse/ZRW-1150) E2E. Extend Modal

### Changed
- [ZRW-1123](https://zattoo2.atlassian.net/browse/ZRW-1123) Forbid concurrent actions on a recording

### Fixed
- [ZRW-430](https://zattoo2.atlassian.net/browse/ZRW-430) Guide. Misplaced now indicator
- [ZRW-1214](https://zattoo2.atlassian.net/browse/ZRW-1214) Guide. Scheduled future recordings should not have play/replay button

### Infrastructure
- [ZRS-916](https://zattoo2.atlassian.net/browse/ZRS-916) Account. Stop sending exception to Sentry in case of missing logo
- Add `@zattoo/changelog-verifier`
- Fixed `zploy` appearance in dependencies
- Update `cypress` to `3.6.0`
- Update `stylelint-config` to `3.2.1`
- Switch CI run from OSX to Linux

## [3.1944.0] - 30.10.2019

### Added
- [ZRW-92](https://zattoo2.atlassian.net/browse/ZRW-92) Remote Scheduling of local recordings
- [ZRW-1149](https://zattoo2.atlassian.net/browse/ZRW-1149) Highlights feature flag
- [ZRW-879](https://zattoo2.atlassian.net/browse/ZRW-879) Custom translations for 1und1
- [ZRW-877](https://zattoo2.atlassian.net/browse/ZRW-877) Favicons for 1und1
- [ZRW-882](https://zattoo2.atlassian.net/browse/ZRW-882) Configurable Gradient Angle
- [ZRW-1146](https://zattoo2.atlassian.net/browse/ZRW-1146) E2E Terms & Privacy Policy
- [ZRW-1111](https://zattoo2.atlassian.net/browse/ZRW-1111) Initial state management for vod feature
- [ZRW-637](https://zattoo2.atlassian.net/browse/ZRW-637) Welcome page background for 1und1
- [ZRW-1079](https://zattoo2.atlassian.net/browse/ZRW-1079) E2E - Authentication
- [ZRW-1060](https://zattoo2.atlassian.net/browse/ZRW-1060) Support of forbidden Replay edge cases

### Changed
- [ZRW-1117](https://zattoo2.atlassian.net/browse/ZRW-1117) `1und1` contrast schema for controls
- [ZRW-877](https://zattoo2.atlassian.net/browse/ZRW-877) Favicons for zattoo
- [ZRS-863](https://zattoo2.atlassian.net/browse/ZRS-863) Account. Get rid of data dependencies from the app
- [ZRW-1165](https://zattoo2.atlassian.net/browse/ZRW-1165) Avoid boolean and fragment in one expression

### Fixed
- [ZRW-1143](https://zattoo2.atlassian.net/browse/ZRW-1143) App crash when liveProgram is undefined
- [ZRW-874](https://zattoo2.atlassian.net/browse/ZRW-874) Live Edge determination
- [ZRW-1172](https://zattoo2.atlassian.net/browse/ZRW-1172) Fragment fails under boolean conditions
- [ZRW-1175](https://zattoo2.atlassian.net/browse/ZRW-1175) Program Details crashes when episode number is not available

### Infrastructure
- [ZRW-1144](https://zattoo2.atlassian.net/browse/ZRW-1144) Cypress b2b environments
- Added `netcologne` aura delivery
- Reduced size of an app bundle
- Static auras
- Single build
- Static test for files/folders names
- Simplify Google SSO ids
- Update `cypress` to `3.5.0`

## [3.1942.2] - 31.10.2019

### Fixed
- Glitches in transition of Marquee component's slides

## [3.1942.1] - 28.10.2019

### Fixed
- [ZRW-1165](https://zattoo2.atlassian.net/browse/ZRW-1165) Guide crashes
- Details appearance on Broadcast teasers

## [3.1942.0] - 16.10.2019

### Added
- [ZRS-826](https://zattoo2.atlassian.net/browse/ZRS-826) Account. Add user-friendly notification in case of zapi error
- [ZRS-799](https://zattoo2.atlassian.net/browse/ZRS-799) Account. Show proper names for subscriptions and partner's link for pass partner users.
- [ZRW-956](https://zattoo2.atlassian.net/browse/ZRW-956) Guide: indication of recordings and selective replay in non-hover state
- [ZRW-378](https://zattoo2.atlassian.net/browse/ZRW-378) Terms & Privacy Policy in login view for Hotwire
- [ZRW-64](https://zattoo2.atlassian.net/browse/ZRW-64) ZUYA consents to the Privacy section in the Settings page
- [ZRW-639](https://zattoo2.atlassian.net/browse/ZRW-639) Link to Imprint in Login Page for 1&1
- [ZRW-65](https://zattoo2.atlassian.net/browse/ZRW-65) Add dialog asking users for ZUYA consent

### Fixed
- [ZRW-1090](https://zattoo2.atlassian.net/browse/ZRW-1090) Cookie banner appearance for 1&1 aura
- [ZRW-430](https://zattoo2.atlassian.net/browse/ZRW-430) Daylight saving time
- [ZRS-854](https://zattoo2.atlassian.net/browse/ZRS-854) Account. Fix Runtime error for Users with Postfinance Card (old)
- [ZRW-982](https://zattoo2.atlassian.net/browse/ZRW-982), [ZRW-1097](https://zattoo2.atlassian.net/browse/ZRW-1097) Seek after stream starts for Safari instead of using startOffset
- [ZRW-1156](https://zattoo2.atlassian.net/browse/ZRW-1156) Read ab_test_groups from session

### Infrastructure
- Added `hotwire` aura delivery
- Cypress parallelization
- Extend `I18nSplitter` to support multiple children
- Added `matterhorn` aura delivery
- Test that all translations have the same set of variables

## [3.1940.0] - 02.10.2019

### Added
- [ZRW-1062](https://zattoo2.atlassian.net/browse/ZRW-1062) Not yet ready recordings support
- [ZRW-1042](https://zattoo2.atlassian.net/browse/ZRW-1042) Handle multiple clicks for skip / rewind
- [ZRS-794](https://zattoo2.atlassian.net/browse/ZRS-794) Implement Confirmation Page for Deleting Account
- [ZRW-608](https://zattoo2.atlassian.net/browse/ZRW-608) Support US time and date formats
- [ZRW-1087](https://zattoo2.atlassian.net/browse/ZRW-1087) Allow to force-trigger the error screen
- [ZRW-1073](https://zattoo2.atlassian.net/browse/ZRW-1073) Analytics: track `/program` & `/ondemamd` program-details
- [ZRW-969](https://zattoo2.atlassian.net/browse/ZRW-969) Add advertisement label to display ads sidebar
- [ZRW-1084](https://zattoo2.atlassian.net/browse/ZRW-1084) NPVR only recording support
- [ZRW-968](https://zattoo2.atlassian.net/browse/ZRW-968) Not Supported Browser Error
- [ZRW-1107](https://zattoo2.atlassian.net/browse/ZRW-1107) Analytics: tracking 'programInfo' and 'videoInfo' events

### Changed
- [ZRW-928](https://zattoo2.atlassian.net/browse/ZRW-928) Password recovery: Replace signup link to login link
- [ZRW-1096](https://zattoo2.atlassian.net/browse/ZRW-1096) Use relative links for redirects to the corporate page
- [ZRW-969](https://zattoo2.atlassian.net/browse/ZRW-969) Display ads refresh relies on context change instead of route change
- [ZRS-779](https://zattoo2.atlassian.net/browse/ZRS-779) Reverse order of Billing History
- Single guide request is now used instead of 4

### Fixed
- [ZRW-1072](https://zattoo2.atlassian.net/browse/ZRW-1072) Display Ads Sidebar horizontal centering
- [ZRS-833](https://zattoo2.atlassian.net/browse/ZRS-833) wrong determination of personalized ads
- [ZRW-969](https://zattoo2.atlassian.net/browse/ZRW-969) Close button for branding day ads
- [ZRW-1040](https://zattoo2.atlassian.net/browse/ZRW-1040) Anonymous program page: Meta title and description contain "undefined"
- [ZRW-1107](https://zattoo2.atlassian.net/browse/ZRW-1107) Analytics: 'openPage' contained "undefined"

### Infrastructure
- [ZRW-1099](https://zattoo2.atlassian.net/browse/ZRW-1099) Controls tweaks.  Default color. Color and kind reexports
- [ZRW-1083](https://zattoo2.atlassian.net/browse/ZRW-1083) Fail deploy script on timeout
- [ZRW-1061](https://zattoo2.atlassian.net/browse/ZRW-1061) Remove source maps references in prod env
- Fix CSS linting
- Load SVG icons as a sprite
- Various changes to type definitions
- Updated dependencies
- Updated node to `v12.11.0`
- Updated `@zattoo/hyperion-core` to `v5.1.7`
- Create predefined date and time formats

## [3.1938.0] - 20.09.2019

### Added
- [ZRW-1047](https://zattoo2.atlassian.net/browse/ZRW-1047) Login with ZUYA token
- [ZRW-954](https://zattoo2.atlassian.net/browse/ZRW-954) Track Ads Skip
- [ZRW-1055](https://zattoo2.atlassian.net/browse/ZRW-1055) SelectField Component
- [ZRW-1067](https://zattoo2.atlassian.net/browse/ZRW-1067) Possibility to have an external redirect after login
- Extend Sandbox Teasers - Teaser-editorial

### Changed
- Remove Developer mode for Sandbox
- [ZRW-997](https://zattoo2.atlassian.net/browse/ZRW-997) Disallow robots on non-prod environments
- [ZRW-1056](https://zattoo2.atlassian.net/browse/ZRW-1056) disabled Control styles
- [ZRW-1032](https://zattoo2.atlassian.net/browse/ZRW-1032) Remove Language switching from developer mode
- [ZRW-942](https://zattoo2.atlassian.net/browse/ZRW-942) Change wording / button in settings linking to account
- [ZRW-1000](https://zattoo2.atlassian.net/browse/ZRW-1000), [ZRW-1058](https://zattoo2.atlassian.net/browse/ZRW-1058), [ZRW-1064](https://zattoo2.atlassian.net/browse/ZRW-1064) Record Controls implementation
- [ZRS-781](https://zattoo2.atlassian.net/browse/ZRS-781) Show error message in red under field but keep label in black

### Fixed
- [ZRW-915](https://zattoo2.atlassian.net/browse/ZRW-915) Incorrect playback time after resume from DE pause live
- [ZRW-995](https://zattoo2.atlassian.net/browse/ZRW-995) Keep live stream muted when unmute ads
- [ZRW-912](https://zattoo2.atlassian.net/browse/ZRW-912) Ads playback issue in iOS
- [ZRW-1043](https://zattoo2.atlassian.net/browse/ZRW-1043) Guide "Now" Button is not disabled
- [ZRW-1059](https://zattoo2.atlassian.net/browse/ZRW-1059) Delete signup cookie on login
- [ZRW-1035](https://zattoo2.atlassian.net/browse/ZRW-1035) Redirects to display alias URLs needed also for anonymous channel pages
- [ZRW-1081](https://zattoo2.atlassian.net/browse/ZRW-1081) Search for "/" causes app crashes
- [ZRW-1071](https://zattoo2.atlassian.net/browse/ZRW-1071) Unassigned user ID in Google Analytics
- [ZRS-780](https://zattoo2.atlassian.net/browse/ZRS-780) Non specific error when trying to delete a user that has active subscriptions or uses a wrong password from the account management
- [ZRW-1092](https://zattoo2.atlassian.net/browse/ZRW-1092) Series detail page doesn't update after deleting a episode recording
- [ZRW-1091](https://zattoo2.atlassian.net/browse/ZRW-1091) App crashes when a TV Channel teaser has no program information
- Screen splashes on page reload

### Infrastructure
- [ZRW-924](https://zattoo2.atlassian.net/browse/ZRW-924) Visual regression tests
- [ZRW-1041](https://zattoo2.atlassian.net/browse/ZRW-1041) Cache display ads requests
- Added hotfix, lab and b2b deployments
- Consume translations as JSON files
- Updated TypeScript
- Update Sentry
- Added size testing
- Rename b2b envs to blossom
- Move zattoo-nominee/ads feature to internal IMA feature
- Rename Ads feature to Video Ads
- Improve quality of e2e tests
- Missing Control styles
- Added Record Control specification
- Account. Remove redundant Sentry exceptions

## [3.1935.9] - 06.09.2019

### Added
- [ZRS-713](https://zattoo2.atlassian.net/browse/ZRS-713): Create consistent graphics/logos packages of subscriptions for Account Management

### Fixed
- [ZRS-764](https://zattoo2.atlassian.net/browse/ZRS-764): Delete account modal displayed after log in
- [ZRS-804](https://zattoo2.atlassian.net/browse/ZRS-804): Account crushes if our partner's user clicks Payment methods link
- [ZRW-803](https://zattoo2.atlassian.net/browse/ZRS-803) Unhandled redeem scenarios

## [3.1935.8] - 06.09.2019

### Added
- [ZRW-803](https://zattoo2.atlassian.net/browse/ZRS-803) Needed Redirects for redeem voucher logic

## [3.1935.7] - 03.09.2019

### Fixed
- [ZRW-1054](https://zattoo2.atlassian.net/browse/ZRW-1054) Channels Sidebar appearance for Recording stream

## [3.1935.6] - 02.09.2019

### Fixed
- [ZRW-1034](https://zattoo2.atlassian.net/browse/ZRW-1034) Scheduled record actions
- [ZRW-1030](https://zattoo2.atlassian.net/browse/ZRW-1030) Horizontal scrollbar in settings on mobile
- [ZRW-1028](https://zattoo2.atlassian.net/browse/ZRW-1028) Braze SDK initialization
- [ZRW-1026](https://zattoo2.atlassian.net/browse/ZRW-1026) Show ads in Account as overlay
- [ZRW-1027](https://zattoo2.atlassian.net/browse/ZRW-1027) Transition to Cinema mode doesn't work in iOS Safari
- [ZRW-1033](https://zattoo2.atlassian.net/browse/ZRW-1033) Unwanted Zapping in Recordings and AVOD
- [ZRW-1014](https://zattoo2.atlassian.net/browse/ZRW-1014) Ads crash in Firefox
- [ZRW-1037](https://zattoo2.atlassian.net/browse/ZRW-1037) SSE is not supported by Edge
- Handle missing editorial collections case

### Infrastructure
- Deploy Sentry sourcemaps only for prod environments
- Provide aura "environment" to Sentry
- Don't load TVSA ads if cid is not defined
- Limit test runs

## [3.1935.5] - 29.08.2019

### Changed
- [ZRW-1020](https://zattoo2.atlassian.net/browse/ZRW-1020) treat display ads exception in more pragmatic way

### Fixed
- [ZRW-1019](https://zattoo2.atlassian.net/browse/ZRW-1019) "No Program Info" where it should be program time
- [ZRW-1009](https://zattoo2.atlassian.net/browse/ZRW-1009) Meta title and description not recognized on anonymous channel pages
- [ZRW-1009](https://zattoo2.atlassian.net/browse/ZRW-1025) Exception on empty editorial element
- [ZRW-1023](https://zattoo2.atlassian.net/browse/ZRW-1023) Updates on an unmounted component
- [ZRW-1029](https://zattoo2.atlassian.net/browse/ZRW-1029) Broken marquee component on iOS devices
- [ZRW-1031](https://zattoo2.atlassian.net/browse/ZRW-1031) path to zpush

### Infrastructure
- Upload source maps to sentry

## [3.1935.4] - 28.08.2019

### Fixed
- [ZRW-1018](https://zattoo2.atlassian.net/browse/ZRW-1018) RangeError: Maximum call stack size exceeded
- [ZRW-1013](https://zattoo2.atlassian.net/browse/ZRW-1013) Fix AVOD empty space reserved for Channels Bar
- [ZRW-1008](https://zattoo2.atlassian.net/browse/ZRW-1008) Recording menu windows cropped when in guide on split mode

## [3.1935.3] - 28.08.2019

### Fixed
- [ZRW-1014](https://zattoo2.atlassian.net/browse/ZRW-1014) TypeError: this.slot.getSlotId(...).getId is not a function
- [ZRW-1010](https://zattoo2.atlassian.net/browse/ZRW-1010) Remove noindex meta tag
- [ZRW-1016](https://zattoo2.atlassian.net/browse/ZRW-1016) TypeError: Cannot read property 'id' of undefined
- [ZRW-1017](https://zattoo2.atlassian.net/browse/ZRW-1017) ReferenceError: google is not defined

## [3.1935.2] - 28.08.2019

### Fixed
- [ZRW-1002](https://zattoo2.atlassian.net/browse/ZRW-1002) Channels - Logos: HD logos shown for Free (DE/CH) users
- [ZRW-1006](https://zattoo2.atlassian.net/browse/ZRW-1006) TypeError: e.toString(...).padStart is not a function
- [ZRW-1005](https://zattoo2.atlassian.net/browse/ZRW-1005) Account payment logos

## [3.1935.1] - 28.08.2019

### Fixed
- Hotjar property id

### Infrastructure
- Added hotfix, lab and b2b deployments

## [3.1935.0] - 21.08.2019

### Added
- [ZRW-945](https://zattoo2.atlassian.net/browse/ZRW-945), [ZRW-990](https://zattoo2.atlassian.net/browse/ZRW-990) Eloquent Channels Sidebar
- [ZRW-937](https://zattoo2.atlassian.net/browse/ZRW-937) Extend clickable area for Guide Blocks, adjusting hover delay
- [ZRW-496](https://zattoo2.atlassian.net/browse/ZRW-496) Details pages in Fullscreen View
- Newsletter and personalised ads setting e2e tests
- [ZRW-944](https://zattoo2.atlassian.net/browse/ZRW-944) Tracking `watch` event in Analytics
- [ZRW-978](https://zattoo2.atlassian.net/browse/ZRW-978) Don’t show sidebar ads while video ad is playing
- [ZRW-535](https://zattoo2.atlassian.net/browse/ZRW-535) New SSO user scenario
- [ZRW-983](https://zattoo2.atlassian.net/browse/ZRW-983) `/signup` and `/register` to `/start/shop` redirect
- [ZRW-995](https://zattoo2.atlassian.net/browse/ZRW-995) Keep live stream muted when unmute ads

### Changed
- [ZRW-950](https://zattoo2.atlassian.net/browse/ZRW-950) Account enabled
- [ZRW-861](https://zattoo2.atlassian.net/browse/ZRW-861) Root Redirects feature enabled
- [ZRW-949](https://zattoo2.atlassian.net/browse/ZRW-949) Removed Beta signs
- [ZRW-485](https://zattoo2.atlassian.net/browse/ZRW-485) Removed greyscale background for Generic Teaser
- [ZRW-885](https://zattoo2.atlassian.net/browse/ZRW-855) Disable hotjar free user parameter in URL
- [ZRW-961](https://zattoo2.atlassian.net/browse/ZRW-961) Swap Replay and Seek Backward OSD controls
- Shop url to relative
- [ZRS-750](https://zattoo2.atlassian.net/browse/ZRS-750) Extend account Forgot password message
- [ZRS-748](https://zattoo2.atlassian.net/browse/ZRS-748) Make Account Info-content visible
- [ZRS-754](https://zattoo2.atlassian.net/browse/ZRS-754) Extend account clickable area
- [ZRS-756](https://zattoo2.atlassian.net/browse/ZRS-756) Change zattoo PLUS Recordings Plus icon in Account Mgmt
- App Tid to live one

### Fixed
- [ZRW-485](https://zattoo2.atlassian.net/browse/ZRW-485) Remove greyscale background for Generic Teaser
- [ZRW-977](https://zattoo2.atlassian.net/browse/ZRW-977) Hide Billboard Display Ads when stream is playing
- [ZRW-972](https://zattoo2.atlassian.net/browse/ZRW-972) TVSA Display Ads appearing
- Non-clickable bottom area in Sort & Filter
- [ZRW-917](https://zattoo2.atlassian.net/browse/ZRW-917) Incorrect mute state after setting volume to 0
- [ZRW-970](https://zattoo2.atlassian.net/browse/ZRW-970) Default meta description and meta updates
- [ZRW-996](https://zattoo2.atlassian.net/browse/ZRW-996) Menu outside or not fitting OSD in cinema mode with small window
- [ZRS-753](https://zattoo2.atlassian.net/browse/ZRS-753) Changing language in account is not possible
- [ZRS-763](https://zattoo2.atlassian.net/browse/ZRS-763) Edit account screen is grayed out on Microsoft Edge
- Extra branding day requests
- Content jumps when scrolling a grid of teasers

### Infrastructure
- [ZRW-922](https://zattoo2.atlassian.net/browse/ZRW-922) Do not introduce Sandbox to production environments

## [3.1933.1] - 23.08.2019

### Added
Extra session fetch after login to receive correct session info

## [3.1933.0] - 14.08.2019

### Added
- [ZRW-769](https://zattoo2.atlassian.net/browse/ZRW-769) OSD Zap controls
- [ZRW-911](https://zattoo2.atlassian.net/browse/ZRW-911) Visual feedback for keyboard volume change
- [ZRW-918](https://zattoo2.atlassian.net/browse/ZRW-918) Redirect from authenticated area to reset password page by direct link
- [ZRW-946](https://zattoo2.atlassian.net/browse/ZRW-946) Buffering indication

### Changed
- [ZRW-941](https://zattoo2.atlassian.net/browse/ZRW-941) Playback settings

### Fixed
- [ZRW-902](https://zattoo2.atlassian.net/browse/ZRW-902) Firefox DRM stream playback issue
- Translation containing Aura title
- Cropped Player in Cinema Landscape mode

### Infrastructure
- [ZRW-241](https://zattoo2.atlassian.net/browse/ZRW-241) Dynamic translations
- Removed mapping of the `DetailedCompressedProgramInfo`
- Channels information is extended as soon as it's retrieved from ZAPI
- Added Cypress commands for creating and deleting user
- Automated Release Deployment
- Removed deep comparison from teasers
- Move tests back to Travis
- Upgraded Bitmovin player from 8.12.0 to 8.14.2
- Introduce `I18nSplitter` component
- [ZRW-334](https://zattoo2.atlassian.net/browse/ZRW-334) Teasers Sandbox
- [ZRW-939](https://zattoo2.atlassian.net/browse/ZRW-939) Move Teaser types to TS definitions
- [ZRW-248](https://zattoo2.atlassian.net/browse/ZRW-248) Add static test for Translations
- Optimize static images

## [3.1931.1] - 09.08.2019

### Fixed
- [ZRW-940](https://zattoo2.atlassian.net/browse/ZRW-940) one-way shifting to low quality live streams & shuttering issues

## [3.1931.0] - 31.07.2019

### Added
- [ZRW-898](https://zattoo2.atlassian.net/browse/ZRW-898) Anonymous Reset Password page
- [ZRW-844](https://zattoo2.atlassian.net/browse/ZRW-844) Advertisement label
- [ZRW-853](https://zattoo2.atlassian.net/browse/ZRW-853) Optimize titles on anonymous show details page
- [ZRW-876](https://zattoo2.atlassian.net/browse/ZRW-876) Subscribable indicators
- [ZRW-894](https://zattoo2.atlassian.net/browse/ZRW-894) E2E Reset Password page
- [ZRW-919](https://zattoo2.atlassian.net/browse/ZRW-919) Password Field - Sandbox & E2E
- [ZRW-863](https://zattoo2.atlassian.net/browse/ZRW-863) Add analytics category to LIVE button

### Changed
- [ZRW-851](https://zattoo2.atlassian.net/browse/ZRW-851) `zattoo` Google Analytics property
- [ZRW-887](https://zattoo2.atlassian.net/browse/ZRW-887) Prevent billboard display ads content jumps
- Toolbar controls color to alternative
- No controls in non-rotatable carousel

### Fixed
- [ZRW-862](https://zattoo2.atlassian.net/browse/ZRW-862) Sidebar ads on details page
- [ZRW-887](https://zattoo2.atlassian.net/browse/ZRW-887) Wrong date in Teaser cards

### Infrastructure
- [ZRW-900](https://zattoo2.atlassian.net/browse/ZRW-900) Added integration tests for Loading indicator, Checkbox, Radio, Text input.
- [ZRW-783](https://zattoo2.atlassian.net/browse/ZRW-783) Cover utils with Unit tests II
- Lowered size of a teaser's image to `320x180`
- Updated @zattoo/hyperion-core, webpack plugins
- Separate dependecies from devDependencies
- Enable Cypress parallelization
- Updated @zattoo/carousel
- Remove source maps from prod environment
- Fixed unsync with regenerator @babel/runtime version
- Changed alternative control color
- Increase Bitmovin max buffer to 16

## [3.1929.0] - 19.07.2019

### Added
- [ZRW-856](https://zattoo2.atlassian.net/browse/ZRW-856) 404 Page
- [ZRW-184](https://zattoo2.atlassian.net/browse/ZRW-184) Visual feedback on keyboard controls
- [ZRW-857](https://zattoo2.atlassian.net/browse/ZRW-857) Redirects for the legacy live playback deeplinks
- [ZRW-858](https://zattoo2.atlassian.net/browse/ZRW-858) Redirect for legacy /mobile-redirect path
- [ZRW-860](https://zattoo2.atlassian.net/browse/ZRW-860) Keyboard shortcuts for volume control
- [ZRW-292](https://zattoo2.atlassian.net/browse/ZRW-292) Upsell state of Recordings
- [ZRW-292](https://zattoo2.atlassian.net/browse/ZRW-892) Forgot Password

### Changed
- [ZRW-859](https://zattoo2.atlassian.net/browse/ZRW-859) Changes to keyboard shortcuts
- [ZRW-493](https://zattoo2.atlassian.net/browse/ZRW-493) Disable hover on devices that don't fully support it
- [ZRW-848](https://zattoo2.atlassian.net/browse/ZRW-848) Replay button logic
- [ZRW-847](https://zattoo2.atlassian.net/browse/ZRW-847) Recording button logic for free users

### Fixed
- [ZRW-829](https://zattoo2.atlassian.net/browse/ZRW-829) Recording - Series - Scheduled: Remove Episode option is available
- [ZRW-838](https://zattoo2.atlassian.net/browse/ZRW-838) Avoid seek to future in post-padding zone of non-airing program
- [ZRW-854](https://zattoo2.atlassian.net/browse/ZRW-854) Exit picture-in-picture when Cast session starts
- [ZRW-866](https://zattoo2.atlassian.net/browse/ZRW-866) AVOD show details page does not work after page reloads
- [ZRW-872](https://zattoo2.atlassian.net/browse/ZRW-872) Play after pause a live stream leads to Live without asking
- [ZRW-831](https://zattoo2.atlassian.net/browse/ZRW-831) Incorrect status of a playback's availability
- [ZRW-875](https://zattoo2.atlassian.net/browse/ZRW-875) Avoid stuttering after zapping
- [ZRW-811](https://zattoo2.atlassian.net/browse/ZRW-811) Branding day ad appearing
- [ZRW-868](https://zattoo2.atlassian.net/browse/ZRW-868) Short pause between sequential ads
- shop urls callback parameter

### Infrastructure
- updated dependencies
- simplified `ProgressBar` component

## [3.1927.2] - 16.07.2019

### Fixed
- [ZRW-886](https://zattoo2.atlassian.net/browse/ZRW-886) DASH stream with Playready DRM in Edge

## [3.1927.1] - 01.07.2019

### Fixed
- [ZRW-816](https://zattoo2.atlassian.net/browse/ZRW-816) Infinite loading after seek with different audio
- [ZRW-838](https://zattoo2.atlassian.net/browse/ZRW-838) Avoid seek to future in post-padding zone of non-airing program

### Infrastructure
- Upgraded Bitmovin player from 8.8.0 to 8.11.0

## [3.1927.0] - 28.06.2019

### Added
- [ZRW-771](https://zattoo2.atlassian.net/browse/ZRW-771) Player/OSD: Extend click target for opening the show details
- [ZRW-104](https://zattoo2.atlassian.net/browse/ZRW-104) Teaser time
- [ZRW-794](https://zattoo2.atlassian.net/browse/ZRW-794) Amazon Publisher Tags
- [ZRW-797](https://zattoo2.atlassian.net/browse/ZRW-797) Basic timeshift support for Cast
- [ZRW-811](https://zattoo2.atlassian.net/browse/ZRW-811) Branding Day display ads
- [ZRW-775](https://zattoo2.atlassian.net/browse/ZRW-775) Overscreen prerolls
- [ZRW-793](https://zattoo2.atlassian.net/browse/ZRW-793) Ads volume control
- [ZRW-502](https://zattoo2.atlassian.net/browse/ZRW-502) Enforced skippability of Video Ads
- [ZRW-792](https://zattoo2.atlassian.net/browse/ZRW-792) B2C root redirects
- [ZRW-485](https://zattoo2.atlassian.net/browse/ZRW-485) Support Teaser types "Editorial::Page", “Editorial::TeaserCollection” and "" (null)
- [ZRW-739](https://zattoo2.atlassian.net/browse/ZRW-739) Anonymous channel page
- [ZRW-705](https://zattoo2.atlassian.net/browse/ZRW-705) Remove playing recording
- [ZRW-685](https://zattoo2.atlassian.net/browse/ZRW-685) ZAPI notifying about Video Ads Third Quartile
- [ZRW-837](https://zattoo2.atlassian.net/browse/ZRW-837) OSD: Sidebar for replay adn timeshift playback
- [ZRW-689](https://zattoo2.atlassian.net/browse/ZRW-689) Anonymous program details and AVOD
- [ZRW-806](https://zattoo2.atlassian.net/browse/ZRW-806) Player - show message in player while PiP mode is active
- [ZRW-396](https://zattoo2.atlassian.net/browse/ZRW-396) Request PIN when starting PIN-protected stream
- [ZRW-397](https://zattoo2.atlassian.net/browse/ZRW-397) Temporarily block PIN after 3 wrong tries
- [ZRW-850](https://zattoo2.atlassian.net/browse/ZRW-850) new type of the select component and inverse option
- [ZRW-830](https://zattoo2.atlassian.net/browse/ZRW-830) Distinguish free vs. pay users in hotjar

### Changed
- [ZRW-368](https://zattoo2.atlassian.net/browse/ZRW-368) hardcoded dynamic sidebar ads to dyn-sydebar  ones, limit sidebar sides items, and fix disappearance of side items
- [ZRW-742](https://zattoo2.atlassian.net/browse/ZRW-742) Adjust logo sizes for teasers on list view
- [ZRW-820](https://zattoo2.atlassian.net/browse/ZRW-820) Change Modal styles
- [ZRW-822](https://zattoo2.atlassian.net/browse/ZRW-822) Guide Upcoming Shows style
- [ZRW-809](https://zattoo2.atlassian.net/browse/ZRW-809) Batch delete recordings - "Select all" Button more prominent

### Removed
- [ZRW-814](https://zattoo2.atlassian.net/browse/ZRW-814) Remove Private Party

### Fixed
- [ZRW-805](https://zattoo2.atlassian.net/browse/ZRW-805) Display names of channel groups properly
- [ZRW-821](https://zattoo2.atlassian.net/browse/ZRW-821) Carousel infinity loading
- [ZRW-654](https://zattoo2.atlassian.net/browse/ZRW-654) Program's placement in Guide
- [ZRW-818](https://zattoo2.atlassian.net/browse/ZRW-818) Volume bar disappears on user's clicks
- [ZRW-824](https://zattoo2.atlassian.net/browse/ZRW-824) Missing next program information
- [ZRW-483](https://zattoo2.atlassian.net/browse/ZRW-483) Allow to use a formal type of translations
- [ZRW-839](https://zattoo2.atlassian.net/browse/ZRW-839) Missing channels in a group
- [ZRW-748](https://zattoo2.atlassian.net/browse/ZRW-748) Replay: Wrong text after leaving replay
- Marquee initializing on non-existent nodes
- Marquee Doppelganger appearance when display advertisement present

### Infrastructure
- Extract Menu from Main template to standalone entity
- Redefine Media elements flow
- [ZRW-783](https://zattoo2.atlassian.net/browse/ZRW-783) Cover utils with Unit tests
- [ZRW-726](https://zattoo2.atlassian.net/browse/ZRW-726) Replace menu size props passing with custom variables
- Update @zattoo/hyperion-core
- Updated typescript
- Replace local border radius variables with ones from @hyperion-core
- Allow to provide custom Cast environment

## [3.1923.0] - 05.06.2019

### Added
- [ZRW-368](https://zattoo2.atlassian.net/browse/ZRW-368) Display Ads
- [ZRW-744](https://zattoo2.atlassian.net/browse/ZRW-744) PiP for Safari
- [ZRW-721](https://zattoo2.atlassian.net/browse/ZRW-721) Add Info Button in Player OSD (Cinema & Fullscreen) to display keyboard shortcuts
- [ZRW-785](https://zattoo2.atlassian.net/browse/ZRW-785) Cast cue points
- [ZRW-776](https://zattoo2.atlassian.net/browse/ZRW-776) Channels Sidebar keyboard behavior
- [ZRW-710](https://zattoo2.atlassian.net/browse/ZRW-710) OAuth Login
- [ZRW-799](https://zattoo2.atlassian.net/browse/ZRW-799) Support for multiple cast senders
- [ZRW-473](https://zattoo2.atlassian.net/browse/ZRW-473) Cookie banner
- [ZRW-648](https://zattoo2.atlassian.net/browse/ZRW-638) More shortcuts for the player

### Changed
- [ZRW-694](https://zattoo2.atlassian.net/browse/ZRW-694) Deeplink structure
- [ZRW-731](https://zattoo2.atlassian.net/browse/ZRW-731) Use stream urls that are specific to Cast
- [ZRW-796](https://zattoo2.atlassian.net/browse/ZRW-796) Details control shrinking
- [ZRW-834](https://zattoo2.atlassian.net/browse/ZRW-834) Hide Info button in mobile

### Fixed
- [ZRW-763](https://zattoo2.atlassian.net/browse/ZRW-763) Series card total output counts all possible episodes
- [ZRW-718](https://zattoo2.atlassian.net/browse/ZRW-718) Ads volume settings and playback
- [ZRW-516](https://zattoo2.atlassian.net/browse/ZRW-516) Remaining time of a replay stream
- [ZRW-725](https://zattoo2.atlassian.net/browse/ZRW-725) Bitrate selection for ULTIMATE user
- [ZRW-631](https://zattoo2.atlassian.net/browse/ZRW-631) Today translation for guide
- [ZRW-678](https://zattoo2.atlassian.net/browse/ZRW-678) DE time shift shift forward
- [ZRW-782](https://zattoo2.atlassian.net/browse/ZRW-782) Continuous replay playback
- The Autoplay-blocked screen would always be shown for a replay stream
- [ZRW-813](https://zattoo2.atlassian.net/browse/ZRW-813) Live pause PiP
- [ZRW-828](https://zattoo2.atlassian.net/browse/ZRW-828) Marquee with one item
- [ZRW-754](https://zattoo2.atlassian.net/browse/ZRW-754) Not possible to start playback from marquee (iOS only)

### Infrastructure
- Capture Ads errors
- [ZRW-756](https://zattoo2.atlassian.net/browse/ZRW-756) Update iOS plays inline and Remove Bitmovin Style module
- [ZRW-789](https://zattoo2.atlassian.net/browse/ZRW-789) Update @zattoo/eslint with JSX quotes rule
- @zattoo/hyperion-core was updated

## [3.1921.0] - 23.05.2019

### Added
- [ZRW-606](https://zattoo2.atlassian.net/browse/ZRW-606) Passing of a partner's ID to ZAPI
- [ZRW-712](https://zattoo2.atlassian.net/browse/ZRW-712) Improved handling of autoplay-blocking
- [ZRW-597](https://zattoo2.atlassian.net/browse/ZRW-597) Google analytics custom dimensions
- [ZRW-301](https://zattoo2.atlassian.net/browse/ZRW-301) E2E Tests for empty favorite list
- [ZRW-715](https://zattoo2.atlassian.net/browse/ZRW-715) Season and Episode number for series detail page
- [ZRW-737](https://zattoo2.atlassian.net/browse/ZRW-737) Youth protection rating on program details
- [ZRW-745](https://zattoo2.atlassian.net/browse/ZRW-745) Close PiP mode when ad plays. No PiP for AVOD
- [ZRW-513](https://zattoo2.atlassian.net/browse/ZRW-513) Cast volume control
- [ZRW-579](https://zattoo2.atlassian.net/browse/ZRW-579) Support DE Pause Live stream for Safari
- [ZRW-598](https://zattoo2.atlassian.net/browse/ZRW-598) Google event tracking
- [ZRW-53](https://zattoo2.atlassian.net/browse/ZRW-53) Seek controls for Cast
- [ZRW-641](https://zattoo2.atlassian.net/browse/ZRW-641) Forgot password B2B
- [ZRW-189](https://zattoo2.atlassian.net/browse/ZRW-189) Metadata updates for a live cast stream
- [ZRW-757](https://zattoo2.atlassian.net/browse/ZRW-757) Netmetrix tracking

### Changed
- [ZRW-740](https://zattoo2.atlassian.net/browse/ZRW-740) Preview Teasers content
- [ZRW-720](https://zattoo2.atlassian.net/browse/ZRW-720) OSD appearing behaviour
- [ZRW-683](https://zattoo2.atlassian.net/browse/ZRW-683) Days rounding
- [ZRW-713](https://zattoo2.atlassian.net/browse/ZRW-713) Use recording position state selector not epg util.

### Fixed
- [ZRW-681](https://zattoo2.atlassian.net/browse/ZRW-681) Search tabs selection is not persistent after activating the cinema mode
- [ZRW-625](https://zattoo2.atlassian.net/browse/ZRW-625) Cinema mode doesn't work after search
- [ZRW-801](https://zattoo2.atlassian.net/browse/ZRW-801) Hub page update after Series removal
- [ZRW-804](https://zattoo2.atlassian.net/browse/ZRW-804) Seeking after autoplay in Safari

### Infrastructure
- [ZRW-724](https://zattoo2.atlassian.net/browse/ZRW-724) replace @zattoo-nominee/editorial with @zattoo/editorial
- [ZRW-716](https://zattoo2.atlassian.net/browse/ZRW-716) update Sentry
- [ZRW-181](https://zattoo2.atlassian.net/browse/ZRW-181) Added player's adapter interface
- [ZRW-774](https://zattoo2.atlassian.net/browse/ZRW-774) Loading indicator Sandbox
- Added `updateFavorites` Cypress command to manage favorite channels
- Update @zattoo/hyperion-core
- Group menu E2E tests in one file
- Add performance measurement automation test
- Updated eslint-config
- Stream slow loading indication
- Fixed app icons hashes
- Changed hash to contenthash

## [3.1919.1] - 23.05.2019

### Fixed
- Manage Favorites control was removed from guide

## [3.1919.0] - 08.05.2019

### Added
- [ZRW-30](https://zattoo2.atlassian.net/browse/ZRW-30) Picture in picture support
- [ZRW-617](https://zattoo2.atlassian.net/browse/ZRW-617) Recording expiration
- [ZRW-429](https://zattoo2.atlassian.net/browse/ZRW-429) Braze In-app messages
- [ZRW-432](https://zattoo2.atlassian.net/browse/ZRW-432) Braze Push notifications
- [ZRW-435](https://zattoo2.atlassian.net/browse/ZRW-435) Braze Tracking Opt Out
- [ZRW-59](https://zattoo2.atlassian.net/browse/ZRW-59) Manage favorites
- [ZRW-477](https://zattoo2.atlassian.net/browse/ZRW-477) Deferred deep linking

### Changed
- [ZRW-690](https://zattoo2.atlassian.net/browse/ZRW-690) Initial scrolling animation was disabled for Guide

### Fixed
- [ZRW-728](https://zattoo2.atlassian.net/browse/ZRW-728) ZUYA fetching error in zattoo aura
- [ZRW-727](https://zattoo2.atlassian.net/browse/ZRW-727) Watch recording from beginning
- [ZRW-738](https://zattoo2.atlassian.net/browse/ZRW-738) Incorrect handling of the initial stream's mute state
- [ZRW-759](https://zattoo2.atlassian.net/browse/ZRW-759) Replay starts paused
- [ZRW-761](https://zattoo2.atlassian.net/browse/ZRW-761) Incorrect alt for seek forward button
- [ZRW-758](https://zattoo2.atlassian.net/browse/ZRW-758) Next replay show switching with time
- [ZRW-764](https://zattoo2.atlassian.net/browse/ZRW-764) Live OSD control won't appear anymore if show is not airing
- [ZRW-765](https://zattoo2.atlassian.net/browse/ZRW-765) Live OSD control state when casting
- [ZRW-766](https://zattoo2.atlassian.net/browse/ZRW-766) Ads keeps playing on sender after casting

### Infrastructure
- [ZRW-242](https://zattoo2.atlassian.net/browse/ZRW-242) Migrate to Bitmovin v8
- [ZRW-671](https://zattoo2.atlassian.net/browse/ZRW-671) Added custom implementation of the Helmet component
- [ZRW-566](https://zattoo2.atlassian.net/browse/ZRW-566) Enable css minification
- Fixed actions accumulation in middlewares
- Updated dependencies
- Prepared Editorial feature to be moved outside of project
- Changed `zattoo` aura App TID
- Rewrote implementation of the `TextField` component

## [3.1917.1] - 29.04.2019

### Fixed
- OSD Channels Sidebar gradient

## [3.1917.0] - 24.04.2019

### Added
- [ZRW-479](https://zattoo2.atlassian.net/browse/ZRW-479) OSD elements for Ads video
- [ZRW-484](https://zattoo2.atlassian.net/browse/ZRW-484) OSD Channels Bar
- [ZRW-552](https://zattoo2.atlassian.net/browse/ZRW-552) Cinema mode on orientation change
- [ZRW-648](https://zattoo2.atlassian.net/browse/ZRW-648) Update recording position on pause
- E2E test for style link in menu navigation item
- [ZRW-313](https://zattoo2.atlassian.net/browse/ZRW-313) Google analytics opt-out
- [ZRW-548](https://zattoo2.atlassian.net/browse/ZRW-548) Unify notifications action interface

### Changed
- [ZRW-707](https://zattoo2.atlassian.net/browse/ZRW-707) OSD appearance and contrast scheme
- [ZRW-708](https://zattoo2.atlassian.net/browse/ZRW-708) Increase visibility of upcoming channels

### Fixed
- [ZRW-665](https://zattoo2.atlassian.net/browse/ZRW-665) Pause stream after seeking if previously paused
- [ZRW-655](https://zattoo2.atlassian.net/browse/ZRW-655) Fallback images with missing token
- [ZRW-643](https://zattoo2.atlassian.net/browse/ZRW-643) Only title clickable on player for show details
- [ZRW-662](https://zattoo2.atlassian.net/browse/ZRW-662) Hotjar: feedback widget shown on the Private Party page
- [ZRW-660](https://zattoo2.atlassian.net/browse/ZRW-660) Samsung scaling issue
- Teasers Cards content and image sizes

### Infrastructure
- [ZRW-114](https://zattoo2.atlassian.net/browse/ZRW-114) cleanup zpush feature
- enable "loose" transpilation mode for Babel
- [ZRW-702](https://zattoo2.atlassian.net/browse/ZRW-702) Improve Guide Program Teaser structure

## [3.1915.0] - 11.04.2019

### Added
- [ZRW-111](https://zattoo2.atlassian.net/browse/ZRW-111), [ZRW-677](https://zattoo2.atlassian.net/browse/ZRW-677) Cluster Slide Controls
- [ZRW-592](https://zattoo2.atlassian.net/browse/ZRW-592) Added Expander component
- [ZRW-635](https://zattoo2.atlassian.net/browse/ZRW-635) Guide sticky content feature
- [ZRW-609](https://zattoo2.atlassian.net/browse/ZRW-609) Unify Slide Control
- [ZRW-616](https://zattoo2.atlassian.net/browse/ZRW-616) Restricted quality for program details
- [ZRW-628](https://zattoo2.atlassian.net/browse/ZRW-628), [ZRW-669](https://zattoo2.atlassian.net/browse/ZRW-669) Messages shown when player is on fullscreen mode

### Changed
- [ZRW-524](https://zattoo2.atlassian.net/browse/ZRW-524) Unify Single Episode record with Series Recording Episode

### Fixed
- [ZRW-556](https://zattoo2.atlassian.net/browse/ZRW-556) Stream Leaving Confirmation on logout action
- [ZRW-365](https://zattoo2.atlassian.net/browse/ZRW-365) Editorial page content styles
- [ZRW-593](https://zattoo2.atlassian.net/browse/ZRW-593) Load season of last watch series episode
- [ZRW-546](https://zattoo2.atlassian.net/browse/ZRW-546) Teaser cards do not update
- [ZRW-504](https://zattoo2.atlassian.net/browse/ZRW-504) Close button for fullscreen mode
- [ZRW-510](https://zattoo2.atlassian.net/browse/ZRW-510) Disable fullscreen toggle on cast mode
- [ZRW-640](https://zattoo2.atlassian.net/browse/ZRW-640) Teaser service provider logo proportion
- [ZRW-633](https://zattoo2.atlassian.net/browse/ZRW-633) Selected Guide date is not highlighted in date picker
- [ZRW-647](https://zattoo2.atlassian.net/browse/ZRW-647) Switching between dates in Guide
- irrelevant updates of the lineup state which led to a missing program information
- [ZRW-569](https://zattoo2.atlassian.net/browse/ZRW-569) Edge tweaks:
  - Guide improvements
  - Allow submission of an invalid form
  - Player's OSD blinks
  - Scrolling to element
- [ZRW-634](https://zattoo2.atlassian.net/browse/ZRW-634) Stream leftovers over Advertisement
- [ZRW-652](https://zattoo2.atlassian.net/browse/ZRW-652) Favorites section showed all channels when refreshing page
- [ZRW-615](https://zattoo2.atlassian.net/browse/ZRW-615) Timeshift confirmation modal when switching from replay to live mode
- [ZRW-653](https://zattoo2.atlassian.net/browse/ZRW-653) One liner for not found title
- [ZRW-672](https://zattoo2.atlassian.net/browse/ZRW-672) Guide 24h timeout
- [ZRW-674](https://zattoo2.atlassian.net/browse/ZRW-674) Blocked textarea key events

### Infrastructure
- update @zattoo/hyperion-core
- e2e tests for main menu
- migrated to the legacy decorators proposal
- added Monaco bogus app tid
- disable the `TryCatch` Sentry integration
- update React dependencies
- fix release creation

## [3.1913.1] - 10.04.2019

### Fixed
- Blocked Advertisement OSD

## [3.1913.0] - 27.03.2019

Initial Beta
