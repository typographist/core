import { isValidUserConfig } from '.';
import { userConfig, invalidUserConfig } from '../mocks';

describe('isValidUserConfig', () => {
  it('return `true` if the user config is valid', () => {
    expect(isValidUserConfig(userConfig)).toEqual(true);
  });

  it("show warn if the user config isn't valid", () => {
    try {
      isValidUserConfig(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1rem' is invalid value. Base must be a string with the value in pixels or ems or an array of strings. Example 'base': ['14px', '32px'] or 'base': '16em'.`,
      );
    }
  });
});
