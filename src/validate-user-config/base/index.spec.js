import { isValidField, isValidFields } from '.';
import { userConfig, invalidUserConfig } from '../../mocks';

describe('isValidField', () => {
  it('return `true` is base contains px', () => {
    expect(isValidField('12px')).toEqual(true);
  });

  it("show warn if the base isn't valid", () => {
    try {
      isValidField('1rem');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1rem' is invalid value. Base must be a string with the value in pixels or ems or an array of strings. Example 'base': ['14px', '32px'] or 'base': '16em'.`,
      );
    }
  });
});

describe('isValidFields', () => {
  it('return `true` is all bases are valid', () => {
    expect(isValidFields(userConfig)).toEqual(true);
  });

  it("show warn if the bases aren't valid", () => {
    try {
      isValidFields(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1rem' is invalid value. Base must be a string with the value in pixels or ems or an array of strings. Example 'base': ['14px', '32px'] or 'base': '16em'.`,
      );
    }
  });
});
