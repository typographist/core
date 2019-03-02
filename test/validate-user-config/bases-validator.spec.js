import {
  getBases,
  eitherIsValidField,
  isValidField,
  validateFields,
} from '../../src/validate-user-config/bases-validator';
import { userConfig } from '../../src/mocks';

describe('getBases function', () => {
  it('returs all values of base from user config', () => {
    expect(getBases(userConfig)).toEqual([
      ['1em', '2em'],
      '17px',
      '18px',
      '20px',
      '22px',
    ]);
  });
});

describe('eitherIsValidField', () => {
  it('return ', () => {
    expect(eitherIsValidField('12px').isRight).toEqual(true);
  });

  it('if the value contain string with em unit', () => {
    expect(eitherIsValidField('12em').isRight).toEqual(true);
  });

  it('if base contain invalid value', () => {
    expect(eitherIsValidField('1rem').isLeft).toEqual(true);
  });
});

describe('isValidField function', () => {
  it('if the base field is Array of strings contain px unit', () => {
    expect(isValidField(['78px', '28px'])).toEqual(true);
  });

  it('if the base is Array of strings contain em unit', () => {
    expect(isValidField(['78em', '28em'])).toEqual(true);
  });

  it('if the base is Array of strings contain em unit', () => {
    expect(isValidField(['78em', '28em'])).toEqual(true);
  });
});

describe('validateFields function', () => {
  it('all bases are valid', () => {
    expect(validateFields(userConfig)).toEqual(true);
  });
});
