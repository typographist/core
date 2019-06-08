import { validateBreakpoints, validateField, validateFields } from '.';
import { invalidUserConfig } from '../../mocks';

describe('validateBreakpoints', () => {
  it("show warn if the breakpoint doesn't contain the breakpoint property", () => {
    try {
      validateBreakpoints(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. "tablet": must contain the mandatory breakpoint property. Example "tablet": {breakpoint: '768px'}.`,
      );
    }
  });
});

describe('Name of the group', () => {});

describe('validateField', () => {
  it("show warn if the breakpoint value isn't valid", () => {
    try {
      validateField('60rem');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '60rem' is invalid value. Breakpoint must be a string with a value (in pixels). Example 'breakpoint': '1024px'.`,
      );
    }
  });
});

describe('validateFields', () => {
  it("show warn if the breakpoint values aren't valid", () => {
    try {
      validateFields(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '64rem' is invalid value. Breakpoint must be a string with a value (in pixels). Example 'breakpoint': '1024px'.`,
      );
    }
  });
});
