const { getBases } = require('./utils');
const { isValidField, validateFields } = require('./validation');
const { userConfig } = require('../mocks');

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
