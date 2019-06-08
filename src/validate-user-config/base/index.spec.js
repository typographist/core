import { validateField, validateFields } from '.';
import { invalidUserConfig } from '../../mocks';

describe('validateField', () => {
  it("show warn if the base isn't valid", () => {
    try {
      validateField('1rem');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1rem' is invalid value. Base must be a string with the value in pixels or an array of strings. Example 'base': '16px' or 'base': ['14px', '32px'].`,
      );
    }
  });
});

describe('validateFields', () => {
  it("show warn if the bases aren't valid", () => {
    try {
      validateFields(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1rem' is invalid value. Base must be a string with the value in pixels or an array of strings. Example 'base': '16px' or 'base': ['14px', '32px'].`,
      );
    }
  });
});
