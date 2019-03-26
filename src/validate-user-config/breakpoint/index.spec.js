import {
  hasBreakpointProp,
  isValidBreakpoints,
  isValidField,
  isValidFields,
} from '.';
import { userConfig, invalidUserConfig } from '../../mocks';

describe('hasBreakpointProp', () => {
  it('return `true` if the object contains the breakpoint prop', () => {
    expect(hasBreakpointProp(['tablet', { breakpoint: '768px' }])).toEqual(
      true,
    );
  });

  it("show warn if the breakpoint doesn't contain the breakpoint property", () => {
    try {
      isValidBreakpoints(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. "tablet": must contain the mandatory breakpoint property. Example "tablet": {breakpoint: '768px'}.`,
      );
    }
  });
});

describe('Name of the group', () => {});

describe('isValidField', () => {
  it('return `true` is the breakpoint contains the value in pixels', () => {
    expect(isValidField('760px')).toEqual(true);
  });

  it("show warn if the breakpoint value isn't valid", () => {
    try {
      isValidField('60rem');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '60rem' is invalid value. Breakpoint must be a string with a value (in pixels). Example 'breakpoint': '1024px'.`,
      );
    }
  });
});

describe('isValidFields', () => {
  it('return `true` is all breakpoint are valid', () => {
    expect(isValidFields(userConfig)).toEqual(true);
  });

  it("show warn if the breakpoint values aren't valid", () => {
    try {
      isValidFields(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '64rem' is invalid value. Breakpoint must be a string with a value (in pixels). Example 'breakpoint': '1024px'.`,
      );
    }
  });
});
