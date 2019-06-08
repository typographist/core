import { validateUserConfig } from '.';
import { invalidUserConfig } from '../mocks';

describe('validateUserConfig', () => {
  it("show warn if the user config isn't valid", () => {
    try {
      validateUserConfig(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1rem' is invalid value. Base must be a string with the value in pixels or an array of strings. Example 'base': '16px' or 'base': ['14px', '32px'].`,
      );
    }
  });
});
