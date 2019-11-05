const { invalidconfig } = require('./mocks');
const {
  validateConfig,
  validateBase,
  validateBases,
  hasBreakpointProp,
  validateBreakpoint,
  validateBreakpoints,
  validateLineHeight,
  validateLineHeights,
  validateRatio,
  validateRatios,
} = require('../validate-config');

describe('validateBase', () => {
  it("show warn if the base isn't valid", () => {
    try {
      validateBase('1rem');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. '1rem' is invalid 'base'. Base must be a string with the value in pixels or an array of strings. Example 'base': '16px' or 'base': ['14px', '32px'].",
      );
    }
  });
});

describe('validateBases', () => {
  it("show warn if the bases aren't valid", () => {
    try {
      validateBases(invalidconfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. '1rem' is invalid 'base'. Base must be a string with the value in pixels or an array of strings. Example 'base': '16px' or 'base': ['14px', '32px'].",
      );
    }
  });
});

describe('hasBreakpointProp', () => {
  it("show warn if the breakpoint doesn't contain the breakpoint property", () => {
    try {
      hasBreakpointProp(invalidconfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. 'tablet': must contain the mandatory breakpoint property. Example 'tablet': {breakpoint: '768px'}.",
      );
    }
  });
});

describe('Name of the group', () => {});

describe('validateBreakpoint', () => {
  it("show warn if the breakpoint value isn't valid", () => {
    try {
      validateBreakpoint('60rem');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. '60rem' is invalid 'breakpoint'. Breakpoint must be a string with a value (in pixels). Example 'breakpoint': '1024px'.",
      );
    }
  });
});

describe('validateBreakpoints', () => {
  it("show warn if the breakpoint values aren't valid", () => {
    try {
      validateBreakpoints(invalidconfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. '64rem' is invalid 'breakpoint'. Breakpoint must be a string with a value (in pixels). Example 'breakpoint': '1024px'.",
      );
    }
  });
});

describe('validateLineHeight', () => {
  it("show warn if the line height value isn't valid", () => {
    try {
      validateLineHeight('1.5');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. '1.5' is invalid 'lineHeight'. LineHeight must be a number. Example 'lineHeight': 1.5'",
      );
    }
  });
});

describe('validateLineHeights', () => {
  it("show warn if the line height values aren't valid", () => {
    try {
      validateLineHeights(invalidconfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. '1.7' is invalid 'lineHeight'. LineHeight must be a number. Example 'lineHeight': 1.5'",
      );
    }
  });
});

describe('validateRatio', () => {
  it("show warn if the ratio value isn't valid", () => {
    try {
      validateRatio('45 at 6');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. '45 at 6' is ivalid 'ratio'. Ratio must be a number or string containing the font size (in pixels), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.",
      );
    }
  });
});

describe('validateRatios', () => {
  it("show warn if the line height values aren't valid", () => {
    try {
      validateRatios(invalidconfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        "[typographist]: Check your config. '45 at 6' is ivalid 'ratio'. Ratio must be a number or string containing the font size (in pixels), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.",
      );
    }
  });
});

describe('validateConfig', () => {
  it("show warn if the user config isn't valid", () => {
    try {
      validateConfig(invalidconfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1rem' is invalid 'base'. Base must be a string with the value in pixels or an array of strings. Example 'base': '16px' or 'base': ['14px', '32px'].`,
      );
    }
  });
});
