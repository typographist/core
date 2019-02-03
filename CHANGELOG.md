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
normalizeString, toCebabCase, toPxIfHasEm, toSnakeCase, isNumeric

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

* **flow:** add type BreakpointsMap ([0f630b2](https://github.com/typographist/core/commit/0f630b2))

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
