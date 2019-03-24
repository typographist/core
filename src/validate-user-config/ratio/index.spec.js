import {
  isValidRatioString,
  isValidRatioNumber,
  isValidField,
  isValidFields,
} from '.';
import { userConfig, invalidUserConfig } from '../../mocks';

describe('isValidRatioString', () => {
  it('return `true` if the ratio is valid', () => {
    expect(isValidRatioString('45px at 6')).toEqual(true);
  });

  it("show warn if the ratio value isn't valid", () => {
    try {
      isValidRatioString('45 at 6');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '45 at 6' is ivalid value. Ratio must be a number or string containing the font size (in pixels or ems), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`,
      );
    }
  });
});

describe('isValidRatioNumber', () => {
  it('return `true` if the ratio is valid', () => {
    expect(isValidRatioNumber(1.333)).toEqual(true);
  });

  it("show warn if the ratio value isn't valid", () => {
    try {
      isValidRatioNumber('1.333px');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '1.333px' is ivalid value. Ratio must be a number or string containing the font size (in pixels or ems), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`,
      );
    }
  });
});

describe('isValidField', () => {
  it('return `true` if the ratio string is valid', () => {
    expect(isValidField('45px at 6')).toEqual(true);
  });

  it('return `true` if the ratio number is valid', () => {
    expect(isValidField(1)).toEqual(true);
  });

  it("show warn if the ratio value isn't valid", () => {
    try {
      isValidField('45 at 6');
      expect(true).toEqual(false);
    } catch (e) {
      expect(e.message).toEqual(
        `[typographist]: Check your config. '45 at 6' is ivalid value. Ratio must be a number or string containing the font size (in pixels or ems), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`,
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
        `[typographist]: Check your config. '45 at 6' is ivalid value. Ratio must be a number or string containing the font size (in pixels or ems), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`,
      );
    }
  });
});
