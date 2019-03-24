import { isValidField, isValidFields } from '.';
import { userConfig, invalidUserConfig } from '../../mocks';

describe('isValidField', () => {
  it('return `true` if the line height value is valid ', () => {
    expect(isValidField(1.5)).toEqual(true);
  });

  it("show warn if the line height value isn't valid", () => {
    try {
      isValidField('1.5');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1.5' is invalid value. LineHeight must be a number. Example 'lineHeight': 1.5'`,
      );
    }
  });
});

describe('isValidFields', () => {
  it('return `true` if the line height value is valid ', () => {
    expect(isValidFields(userConfig)).toEqual(true);
  });

  it("show warn if the line height values aren't valid", () => {
    try {
      isValidFields(invalidUserConfig);
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1.7' is invalid value. LineHeight must be a number. Example 'lineHeight': 1.5'`,
      );
    }
  });
});
