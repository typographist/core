import {
  getRatios,
  isValidRatioString,
  eitherIsValidRatioString,
  eitherIsValidRatioNumber,
  isValidField,
  validateFields,
} from '@validate-user-config/ratios-validator';
import { userConfig } from '@mocks';

describe('getRatios', () => {
  it('returns all values of the ratio', () => {
    expect(getRatios(userConfig)).toEqual(['45px at 6', 1.333]);
  });
});

describe('isValidRatioString', () => {
  it('return `true` if ratio contains the font size in pixels', () => {
    expect(isValidRatioString('22px at 4')).toEqual(true);
  });

  it('return `true` if ratio contains the font size in ems', () => {
    expect(isValidRatioString('22em at 4')).toEqual(true);
  });

  it('return `true` if ratio contains the `at` word', () => {
    expect(isValidRatioString('22em at 4')).toEqual(true);
  });

  it('return `true` ratio contains the step', () => {
    expect(isValidRatioString('1em at -4')).toEqual(true);
  });
});

describe('eitherIsValidRatioString', () => {
  it('return `true` if ratio string is valid', () => {
    expect(eitherIsValidRatioString('33px at 5').isRight).toEqual(true);
  });

  it('return `true` if ratio string contains font-size with ems', () => {
    expect(eitherIsValidRatioString('33em at 5').isRight).toEqual(true);
  });

  it('return `true` if ratio string contains `at` word', () => {
    expect(eitherIsValidRatioString('33em at 5').isRight).toEqual(true);
  });

  it('return `true` if ratio string contains `step', () => {
    expect(eitherIsValidRatioString('33em at 5').isRight).toEqual(true);
  });

  it('return `true` if ratio string contains negative `step', () => {
    expect(eitherIsValidRatioString('33em at -5').isRight).toEqual(true);
  });
});

describe('eitherIsValidRatioNumber', () => {
  it('return `true` if ratio is numerical value', () => {
    expect(eitherIsValidRatioNumber(12).isRight).toEqual(true);
  });

  it('return `true` if ratio is not numerical value', () => {
    expect(eitherIsValidRatioNumber('12').isLeft).toEqual(true);
  });
});

describe('isValidField', () => {
  it('return `true` if ratio string is valid', () => {
    expect(isValidField('12px at 4')).toEqual(true);
  });

  it('return `true` if ratio is number', () => {
    expect(isValidField(1.2)).toEqual(true);
  });
});

describe('validateFields', () => {
  it('return `true` if all the ratios in userConfig are valid', () => {
    expect(validateFields(userConfig)).toEqual(true);
  });
});
