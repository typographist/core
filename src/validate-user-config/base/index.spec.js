import { isValidBase, isValidBases } from '.';
import { userConfig, invalidUserConfig } from '../../mocks';

describe('isValidBase', () => {
  it('return `true` is base contains px', () => {
    expect(isValidBase('12px')).toEqual(true);
  });

  it("show warn if the base isn't valid", () => {
    try {
      isValidBase('1rem');
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        `[typographist-core]: Check your user config. '1rem' is invalid value. Base must be a string with the value in pixels or ems or an array of strings. Example 'base': ['14px', '32px'] or 'base': '16em'.`,
      );
    }
  });
});

describe('isValidBases', () => {
  it('return `true` is all bases are valid', () => {
    expect(isValidBases(userConfig)).toEqual(true);
  });

  it("show warn if the base isn't valid", () => {
    try {
      isValidBases(invalidUserConfig);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        `[typographist-core]: Check your user config. '1rem' is invalid value. Base must be a string with the value in pixels or ems or an array of strings. Example 'base': ['14px', '32px'] or 'base': '16em'.`,
      );
    }
  });
});
