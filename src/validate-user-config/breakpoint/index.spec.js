import { isValidBreakpointValue, isValidBreakpointValues } from '.';
import { userConfig, invalidUserConfig } from '../../mocks';

describe('isValidBreakpointValue', () => {
  it('return `true` is the breakpoint contains the value in pixels', () => {
    expect(isValidBreakpointValue('760px')).toEqual(true);
  });

  it('return `true` is the breakpoint contains the value in ems', () => {
    expect(isValidBreakpointValue('75em')).toEqual(true);
  });

  it('return `true` is the breakpoint contains the value in ems', () => {
    try {
      isValidBreakpointValue('60rem');
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        `[typographist-core]: Check your user config. '60rem' is invalid value. Breakpoint must be a string with a value in pixels or ems. Example 'breakpoint': '1024px' or 'breakpoint': '40em'.`,
      );
    }
  });
});

describe('isValidBreakpointValues', () => {
  it('return `true` is all breakpoint are valid', () => {
    expect(isValidBreakpointValues(userConfig)).toEqual(true);
  });

  it('return `true` is the breakpoint contains the value in ems', () => {
    try {
      isValidBreakpointValues(invalidUserConfig);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        `[typographist-core]: Check your user config. '40rem' is invalid value. Breakpoint must be a string with a value in pixels or ems. Example 'breakpoint': '1024px' or 'breakpoint': '40em'.`,
      );
    }
  });
});
