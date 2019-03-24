import { isValidField, isValidFields } from '.';
import { userConfig, invalidUserConfig } from '../../mocks';

describe('isValidField', () => {
  it('return `true` is the breakpoint contains the value in pixels', () => {
    expect(isValidField('760px')).toEqual(true);
  });

  it('return `true` is the breakpoint contains the value in ems', () => {
    expect(isValidField('75em')).toEqual(true);
  });

  it("show warn if the breakpoint value isn't valid", () => {
    try {
      isValidField('60rem');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '60rem' is invalid value. Breakpoint must be a string with a value in pixels or ems. Example 'breakpoint': '1024px' or 'breakpoint': '40em'.`,
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
        `[typographist]: Check your config. '40rem' is invalid value. Breakpoint must be a string with a value in pixels or ems. Example 'breakpoint': '1024px' or 'breakpoint': '40em'.`,
      );
    }
  });
});
