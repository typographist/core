## [24.0.2](https://github.com/typographist/core/compare/v24.0.1...v24.0.2) (2019-11-10)


### Bug Fixes

* **typescript:** fix types for makeBreakpointsMap ([f465f2f](https://github.com/typographist/core/commit/f465f2f))

## [24.0.1](https://github.com/typographist/core/compare/v24.0.0...v24.0.1) (2019-11-10)


### Bug Fixes

* adjust import for "makeBreakpointsMap" ([8065638](https://github.com/typographist/core/commit/8065638))

# [24.0.0](https://github.com/typographist/core/compare/v23.0.2...v24.0.0) (2019-11-10)


### chore

* replace utils with lib ([e45805f](https://github.com/typographist/core/commit/e45805f))


### BREAKING CHANGES

* replace getBreakpointsMap with
makeBreakpointsMap

## [23.0.2](https://github.com/typographist/core/compare/v23.0.1...v23.0.2) (2019-11-10)


### Bug Fixes

* fix types for ratios ([29eb845](https://github.com/typographist/core/commit/29eb845))

## [23.0.1](https://github.com/typographist/core/compare/v23.0.0...v23.0.1) (2019-11-08)


### Bug Fixes

* remove 'invariantWithPrefix' ([472b623](https://github.com/typographist/core/commit/472b623))

# [23.0.0](https://github.com/typographist/core/compare/v22.0.0...v23.0.0) (2019-11-08)


### Code Refactoring

* remove type for utils ([c619e94](https://github.com/typographist/core/commit/c619e94))
* remove utils ([0ae6af6](https://github.com/typographist/core/commit/0ae6af6))


### Features

* add modularScale ([f1710d1](https://github.com/typographist/core/commit/f1710d1))
* add typescript types ([b01d8ca](https://github.com/typographist/core/commit/b01d8ca))


### BREAKING CHANGES

* remove percentage, toEm, toPx, toRem, isNumeric
invariant, mekeBreakpointsMap
* percentage, toPx, toEm, toRem,  isNumeric, invariant

# [22.0.0](https://github.com/typographist/core/compare/v21.0.1...v22.0.0) (2019-11-05)


### Code Refactoring

* remove legacy utils ([6e45649](https://github.com/typographist/core/commit/6e45649))


### BREAKING CHANGES

* remove functions
is, type, head, tail, every,all, any, pipe, map,reduce,filter,
createMemoize,invariantWithPrefix, getTailBreakpointsValues
getTailBreakpointsNames, makeBreakpointNamesList, makeBreakpoints,
getInitialBreakpoint, replace makeBreakpointsMap with getBreakpointsMap

## [21.0.1](https://github.com/typographist/core/compare/v21.0.0...v21.0.1) (2019-07-26)


### Bug Fixes

* **scripts:** add lint:all and pretty ([e6b69b1](https://github.com/typographist/core/commit/e6b69b1))

# [21.0.0](https://github.com/typographist/core/compare/v20.0.0...v21.0.0) (2019-07-21)


### Continuous Integration

* **travis:** remove node.js 8 ([070d743](https://github.com/typographist/core/commit/070d743))


### BREAKING CHANGES

* **travis:** remove node.js 8

# [20.0.0](https://github.com/typographist/core/compare/v19.1.1...v20.0.0) (2019-06-26)


### Code Refactoring

* remove functions ([3683436](https://github.com/typographist/core/commit/3683436))


### BREAKING CHANGES

* getFirstLetter, getWordTail, camelize, normalizeString, separateWords,
toKebabCase, toSnakeCase

## [19.1.1](https://github.com/typographist/core/compare/v19.1.0...v19.1.1) (2019-05-05)


### Bug Fixes

* fix lint-staged config ([b41dec6](https://github.com/typographist/core/commit/b41dec6))
* update lint-staged ([0941f30](https://github.com/typographist/core/commit/0941f30))

# [19.1.0](https://github.com/typographist/core/compare/v19.0.0...v19.1.0) (2019-05-05)


### Features

* add create memoize function ([4cc36d0](https://github.com/typographist/core/commit/4cc36d0))
* export createMemoize ([c4d556f](https://github.com/typographist/core/commit/c4d556f))

# [19.0.0](https://github.com/typographist/core/compare/v18.1.1...v19.0.0) (2019-04-24)


### Bug Fixes

* remove lib from the gitignore ([716ef90](https://github.com/typographist/core/commit/716ef90))


### Code Refactoring

* remove BROWSER_VIEWPORT_WIDTH constant ([7dd4537](https://github.com/typographist/core/commit/7dd4537))
* rename BROWSER_DEFAULT_FONT_SIZE with ([d4ffecf](https://github.com/typographist/core/commit/d4ffecf))


### Features

* add hasPx function ([09e4960](https://github.com/typographist/core/commit/09e4960))


### BREAKING CHANGES

* remove BROWSER_VIEWPORT_WIDTH constant
* rename BROWSER_DEFAULT_FONT_SIZE with
BROWSER_CONTEXT

## [18.1.1](https://github.com/typographist/core/compare/v18.1.0...v18.1.1) (2019-04-11)


### Bug Fixes

* **package:** update memoize-one to version 5.0.3 ([d0f466e](https://github.com/typographist/core/commit/d0f466e))

# [18.1.0](https://github.com/typographist/core/compare/v18.0.0...v18.1.0) (2019-03-29)


### Features

* **modular-scale:** add memoization ([b74ec3b](https://github.com/typographist/core/commit/b74ec3b))

# [18.0.0](https://github.com/typographist/core/compare/v17.1.3...v18.0.0) (2019-03-26)


### Code Refactoring

* total rafactoring ([839fc4f](https://github.com/typographist/core/commit/839fc4f))


### BREAKING CHANGES

* Rewrote the user configuration validation module, deleted Ramda and Flow.
Reduced library size from 16.1kb to 4.07

## [17.1.3](https://github.com/typographist/core/compare/v17.1.2...v17.1.3) (2019-03-23)


### Bug Fixes

* **package:** update igogo to version 1.7.1 ([81b5980](https://github.com/typographist/core/commit/81b5980))

## [17.1.2](https://github.com/typographist/core/compare/v17.1.1...v17.1.2) (2019-03-16)


### Bug Fixes

* **package:** update igogo to version 1.7.0 ([1596b03](https://github.com/typographist/core/commit/1596b03))

## [17.1.1](https://github.com/typographist/core/compare/v17.1.0...v17.1.1) (2019-03-02)


### Bug Fixes

* fix paths ([58cea83](https://github.com/typographist/core/commit/58cea83))

# [17.1.0](https://github.com/typographist/core/compare/v17.0.0...v17.1.0) (2019-03-02)


### Features

* add function getBreaksModelOrDefaultModel ([ea94f63](https://github.com/typographist/core/commit/ea94f63))

# [17.0.0](https://github.com/typographist/core/compare/v16.0.0...v17.0.0) (2019-03-02)


### Code Refactoring

* rename utils ([6f5ed76](https://github.com/typographist/core/commit/6f5ed76))


### BREAKING CHANGES

* rename makeBreakpointsMap with
makeBreakpointsModel

# [16.0.0](https://github.com/typographist/core/compare/v15.0.0...v16.0.0) (2019-03-02)


### Code Refactoring

* **add utils for breakpoints:** add utils for breakpoints ([262ae0e](https://github.com/typographist/core/commit/262ae0e))


### Features

* **add utils for breakpoints:** add utils for breakpoints ([009bd3d](https://github.com/typographist/core/commit/009bd3d))


### BREAKING CHANGES

* **add utils for breakpoints:** add utils for breakpoints
* **add utils for breakpoints:** add utils for breakpoints

# [15.0.0](https://github.com/typographist/core/compare/v14.0.0...v15.0.0) (2019-03-02)


### Code Refactoring

* **refactor: return helpers:** return helpers ([4e38fe6](https://github.com/typographist/core/commit/4e38fe6))


### BREAKING CHANGES

* **refactor: return helpers:** return helpers

# [14.0.0](https://github.com/typographist/core/compare/v13.2.0...v14.0.0) (2019-03-02)


### Code Refactoring

*  make utils ([fc074bf](https://github.com/typographist/core/commit/fc074bf))


### BREAKING CHANGES

* transferred functions of
percentage, toEm, toPx, isNumeric, camelize,
modularScale, normalizeString, toKebabCase,
toRem, toSnakeCase to the utils file

# [13.2.0](https://github.com/typographist/core/compare/v13.1.3...v13.2.0) (2019-02-27)


### Features

* add source-maps ([9da9668](https://github.com/typographist/core/commit/9da9668))

## [13.1.3](https://github.com/typographist/core/compare/v13.1.2...v13.1.3) (2019-02-21)


### Bug Fixes

* **package:** update igogo to version 1.6.0 ([b32ff65](https://github.com/typographist/core/commit/b32ff65))

## [13.1.2](https://github.com/typographist/core/compare/v13.1.1...v13.1.2) (2019-02-21)


### Bug Fixes

* **package:** update igogo to version 1.5.0 ([db36102](https://github.com/typographist/core/commit/db36102))

## [13.1.1](https://github.com/typographist/core/compare/v13.1.0...v13.1.1) (2019-02-09)


### Bug Fixes

* **flow:** fix flow-types ([1d7b7c5](https://github.com/typographist/core/commit/1d7b7c5))

# [13.1.0](https://github.com/typographist/core/compare/v13.0.0...v13.1.0) (2019-02-09)


### Bug Fixes

* **get-all-values-of:**  remove maximum call stack error ([ebc998a](https://github.com/typographist/core/commit/ebc998a))


### Features

* rewritten in an immutable style ([983da8a](https://github.com/typographist/core/commit/983da8a))

# [13.0.0](https://github.com/typographist/core/compare/v12.1.0...v13.0.0) (2019-02-06)


### Code Refactoring

* **ratios:** remove ratios from constants ([c2e685b](https://github.com/typographist/core/commit/c2e685b))


### Features

* **ratios:** add ratios ([8f75c2e](https://github.com/typographist/core/commit/8f75c2e))


### BREAKING CHANGES

* **ratios:** remove regexes for postcss

# [12.1.0](https://github.com/typographist/core/compare/v12.0.0...v12.1.0) (2019-02-06)


### Features

* **calc-root:** removed the rounding to a whole number ([774299b](https://github.com/typographist/core/commit/774299b))

# [12.0.0](https://github.com/typographist/core/compare/v11.2.1...v12.0.0) (2019-02-04)


### Code Refactoring

* **modular-scale:** uncurry modular-scale ([c299571](https://github.com/typographist/core/commit/c299571))


### BREAKING CHANGES

* **modular-scale:** uncurry modular scale.
Now the function accepts 3 parameters `step`, `base`, `ratio`

## [11.2.1](https://github.com/typographist/core/compare/v11.2.0...v11.2.1) (2019-02-04)


### Bug Fixes

* **modular-scale:** fix flow-types ([0948820](https://github.com/typographist/core/commit/0948820))

# [11.2.0](https://github.com/typographist/core/compare/v11.1.2...v11.2.0) (2019-02-03)


### Bug Fixes

* **modular-scale:** fix flow-type ([dc0e4ed](https://github.com/typographist/core/commit/dc0e4ed))


### Features

* **models:** add type  BreakpointWithoutRoot ([ec9d04c](https://github.com/typographist/core/commit/ec9d04c))

## [11.1.2](https://github.com/typographist/core/compare/v11.1.1...v11.1.2) (2019-02-03)


### Bug Fixes

* fix flow-types for modularScale function ([9ad04ab](https://github.com/typographist/core/commit/9ad04ab))

## [11.1.1](https://github.com/typographist/core/compare/v11.1.0...v11.1.1) (2019-02-03)


### Bug Fixes

* add correct flow-types ([299605d](https://github.com/typographist/core/commit/299605d))

# [11.1.0](https://github.com/typographist/core/compare/v11.0.1...v11.1.0) (2019-01-31)


### Features

* add types for breakpoints ([a011156](https://github.com/typographist/core/commit/a011156))

## [11.0.1](https://github.com/typographist/core/compare/v11.0.0...v11.0.1) (2019-01-27)


### Bug Fixes

* fix error message ([f016f77](https://github.com/typographist/core/commit/f016f77))

# [11.0.0](https://github.com/typographist/core/compare/v10.0.0...v11.0.0) (2019-01-27)


### Code Refactoring

* rename make-breakpoint ([50a8694](https://github.com/typographist/core/commit/50a8694))


### BREAKING CHANGES

* rename make-breakpoint with
make-breakpoints-map

# [10.0.0](https://github.com/typographist/core/compare/v9.1.0...v10.0.0) (2019-01-27)


### Code Refactoring

* **modular-scale:** change modular-scale function api ([17b99cf](https://github.com/typographist/core/commit/17b99cf))


### BREAKING CHANGES

* **modular-scale:** uncurry modular-scale

# [9.1.0](https://github.com/typographist/core/compare/v9.0.0...v9.1.0) (2019-01-26)


### Features

* **helpers:** add helpers ([15d9a27](https://github.com/typographist/core/commit/15d9a27))

# [9.0.0](https://github.com/typographist/core/compare/v8.0.0...v9.0.0) (2019-01-24)


### Code Refactoring

* remove helpers and modular-scale ([b294ded](https://github.com/typographist/core/commit/b294ded))


### BREAKING CHANGES

* remove fuctions modular-scale, camelize,
normalizeString, toKebabCase, toPxIfHasEm, toSnakeCase, isNumeric

# [8.0.0](https://github.com/typographist/core/compare/v7.0.1...v8.0.0) (2019-01-23)


### Code Refactoring

* **make-breakpoints:** remove safe-make-breakpoints ([ef3d8ea](https://github.com/typographist/core/commit/ef3d8ea))


### BREAKING CHANGES

* **make-breakpoints:** make breakpoints function no longer
returns the Maybe type. The associative array is returned

## [7.0.1](https://github.com/typographist/core/compare/v7.0.0...v7.0.1) (2019-01-23)


### Bug Fixes

* **error-messages:** fix error messages ([0ea8058](https://github.com/typographist/core/commit/0ea8058))
* **error-messages:** fix error messages ([ef26a60](https://github.com/typographist/core/commit/ef26a60))

# [7.0.0](https://github.com/typographist/core/compare/v6.1.0...v7.0.0) (2019-01-23)


### Code Refactoring

* **safe-make-breakpoints:** safe-make-breakpoints ([185af95](https://github.com/typographist/core/commit/185af95))


### BREAKING CHANGES

* **safe-make-breakpoints:** safe-make-breakpoints returns Maybe monad

# [6.1.0](https://github.com/typographist/core/compare/v6.0.0...v6.1.0) (2019-01-23)


### Bug Fixes

* **flow:** add flow types for makeBreakpoints ([ba7d0c1](https://github.com/typographist/core/commit/ba7d0c1))


### Features

* **flow:** add type BreakpointsModel ([0f630b2](https://github.com/typographist/core/commit/0f630b2))

# [6.0.0](https://github.com/typographist/core/compare/v5.1.2...v6.0.0) (2019-01-23)


### Code Refactoring

* **make-breakpoints:** change the output of the breakpoints ([32ccd4d](https://github.com/typographist/core/commit/32ccd4d))


### BREAKING CHANGES

* **make-breakpoints:** breakpoints are not an array but an associative array

## [5.1.2](https://github.com/typographist/core/compare/v5.1.1...v5.1.2) (2019-01-21)


### Bug Fixes

* **models:** fix type for user-config ([43ad00b](https://github.com/typographist/core/commit/43ad00b))

## [5.1.1](https://github.com/typographist/core/compare/v5.1.0...v5.1.1) (2019-01-21)


### Bug Fixes

* **percentage:** add the type of 'string[]' to the function parameter ([e4794b0](https://github.com/typographist/core/commit/e4794b0))

# [5.1.0](https://github.com/typographist/core/compare/v5.0.1...v5.1.0) (2019-01-18)


### Bug Fixes

* **hepers:** fix path for isNumeric function ([b221f70](https://github.com/typographist/core/commit/b221f70))


### Features

* **rollup:** add rollup-plugin-flow-entry ([aff17f7](https://github.com/typographist/core/commit/aff17f7))

## [5.0.1](https://github.com/typographist/core/compare/v5.0.0...v5.0.1) (2019-01-17)


### Bug Fixes

* **travis:** add script postbuild ([fc7db31](https://github.com/typographist/core/commit/fc7db31))

# [5.0.0](https://github.com/typographist/core/compare/v4.1.0...v5.0.0) (2019-01-17)


### Bug Fixes

* move tests from single directory ([e73fd40](https://github.com/typographist/core/commit/e73fd40))
* remove key name from UserConfig type ([4694971](https://github.com/typographist/core/commit/4694971))


### Features

* **public-api:** remove convertors object ([c933b8d](https://github.com/typographist/core/commit/c933b8d))
* add greenkeeper ignore ([02c2478](https://github.com/typographist/core/commit/02c2478))
* postbuild script for automatic type generation ([29126be](https://github.com/typographist/core/commit/29126be))


### BREAKING CHANGES

* **public-api:** Object converters is no longer available outside.
Now each function converter is requested separately

# [4.1.0](https://github.com/typographist/core/compare/v4.0.1...v4.1.0) (2019-01-15)


### Features

* **flow:** add flow types available to end users ([115520f](https://github.com/typographist/core/commit/115520f))

## [4.0.1](https://github.com/typographist/core/compare/v4.0.0...v4.0.1) (2019-01-12)


### Bug Fixes

* **lint-staged:** fixed lint-staged ([4c87b6f](https://github.com/typographist/core/commit/4c87b6f))
* **prettier:** fix prettier :bug: ([bd1aed1](https://github.com/typographist/core/commit/bd1aed1))

# [4.0.0](https://github.com/typographist/core/compare/v3.0.5...v4.0.0) (2019-01-10)


### Code Refactoring

* **modular-scale:** made the function curry ([1c5496b](https://github.com/typographist/core/commit/1c5496b))
* **to-rem:** changed the type of parameters ([0a761d0](https://github.com/typographist/core/commit/0a761d0))


### BREAKING CHANGES

* **to-rem:** instead of root function accepts an object of breakpoint type
* **modular-scale:** instead of root the function accepts an object of breakpoint type

## [3.0.5](https://github.com/typographist/core/compare/v3.0.4...v3.0.5) (2019-01-06)


### Bug Fixes

* **ci:** add gh token ([baafa70](https://github.com/typographist/core/commit/baafa70))
* **ci:** update gh token ([150b10a](https://github.com/typographist/core/commit/150b10a))
* **semantic-release:** add github plugin ([6eef8fa](https://github.com/typographist/core/commit/6eef8fa))
* **to-rem:** add pasefloat for font-size ([92b866b](https://github.com/typographist/core/commit/92b866b))

## [3.0.4](https://github.com/typographist/core/compare/v3.0.3...v3.0.4) (2019-01-06)


### Bug Fixes

* **ci:** change tokens ([0e22f77](https://github.com/typographist/core/commit/0e22f77))
* **to-rem:** add parseFloat for fot-size ([0d4493b](https://github.com/typographist/core/commit/0d4493b))

## [3.0.3](https://github.com/typographist/core/compare/v3.0.2...v3.0.3) (2019-01-04)


### Bug Fixes

* **semantic-release:** remove redundant plugin ([#9](https://github.com/typographist/core/issues/9)) ([6065f2f](https://github.com/typographist/core/commit/6065f2f))

## [3.0.2](https://github.com/typographist/core/compare/v3.0.1...v3.0.2) (2018-12-29)


### Bug Fixes

* **semantic-release:** added automatic update package.json ([6261c61](https://github.com/typographist/core/commit/6261c61))
* **travis:** add build script ([1df5911](https://github.com/typographist/core/commit/1df5911))

## [3.0.1](https://github.com/typographist/core/compare/v3.0.0...v3.0.1) (2018-12-27)


### Bug Fixes

* **package.json:** fix path for es.js files ([6d95927](https://github.com/typographist/core/commit/6d95927))

# [3.0.0](https://github.com/typographist/core/compare/v2.0.0...v3.0.0) (2018-12-27)


### Features

* **index.js:** changed the number of exported files ([3c37402](https://github.com/typographist/core/commit/3c37402))


### BREAKING CHANGES

* **index.js:** added the ability to export helpers, calculators, convertors and constants

# [2.0.0](https://github.com/typographist/core/compare/v1.2.0...v2.0.0) (2018-12-25)


### Bug Fixes

* **percentage function:** returns the result as a percentage ([d591187](https://github.com/typographist/core/commit/d591187))


### BREAKING CHANGES

* **percentage function:** Percentage function returns a string instead of a number.

# [1.2.0](https://github.com/typographist/core/compare/v1.1.0...v1.2.0) (2018-12-25)


### Features

* **package.json:** add commit script ([4173200](https://github.com/typographist/core/commit/4173200))
* add semantic-release icon ([3ff2cba](https://github.com/typographist/core/commit/3ff2cba))

# [1.1.0](https://github.com/typographist/core/compare/v1.0.0...v1.1.0) (2018-12-25)


### Bug Fixes

* update invarant fn test ([7a57413](https://github.com/typographist/core/commit/7a57413))
* **ramda:** change import for ramda ([ffe19db](https://github.com/typographist/core/commit/ffe19db))
* **separate-words:** change default separator ([22535a4](https://github.com/typographist/core/commit/22535a4))


### Features

* **commitizen:** cz-conventional-changelog ([d97825e](https://github.com/typographist/core/commit/d97825e))
* add editor config ([9aa6647](https://github.com/typographist/core/commit/9aa6647))
* **commitlint:** add commentlint config ([31615f8](https://github.com/typographist/core/commit/31615f8))
* add icons in readme ([44e3938](https://github.com/typographist/core/commit/44e3938))
* add index an index file to import all helpers ([8a62374](https://github.com/typographist/core/commit/8a62374))
* add index.js ([4a85c1e](https://github.com/typographist/core/commit/4a85c1e))
* BREAKING CHANGE fuilly refactored ([784c55e](https://github.com/typographist/core/commit/784c55e))
* **eslintignore:** add lib and es directories ([bb16aa5](https://github.com/typographist/core/commit/bb16aa5))
* **husky:** add husky config ([4821f27](https://github.com/typographist/core/commit/4821f27))
* **package.json:** add clean script ([cbe1ea0](https://github.com/typographist/core/commit/cbe1ea0))
* **roolup:** add rollup config ([37b89e6](https://github.com/typographist/core/commit/37b89e6))
* **scripts:** add init script ([ac3f4c5](https://github.com/typographist/core/commit/ac3f4c5))
* **yarn:** add yarn.lock ([20b7d14](https://github.com/typographist/core/commit/20b7d14))
