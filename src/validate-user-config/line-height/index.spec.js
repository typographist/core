import { validateField, validateFields } from '.';
import { userConfig, invalidUserConfig } from '../../mocks';

describe('validateField', () => {
  it("show warn if the line height value isn't valid", () => {
    try {
      validateField('1.5');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1.5' is invalid value. LineHeight must be a number. Example 'lineHeight': 1.5'`,
      );
    }
  });
});

describe('validateFields', () => {
  it("show warn if the line height values aren't valid", () => {
    try {
      validateFields(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1.7' is invalid value. LineHeight must be a number. Example 'lineHeight': 1.5'`,
      );
    }
  });
});
