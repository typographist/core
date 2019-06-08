import { validateField, validateFields } from '.';
import { invalidUserConfig } from '../../mocks';

describe('validateField', () => {
  it("show warn if the ratio value isn't valid", () => {
    try {
      validateField('45 at 6');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '45 at 6' is ivalid value. Ratio must be a number or string containing the font size (in pixels), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`,
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
        `[typographist]: Check your config. '45 at 6' is ivalid value. Ratio must be a number or string containing the font size (in pixels), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`,
      );
    }
  });
});
