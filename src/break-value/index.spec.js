const { getBreakValues } = require('./utils');
const {
  isValidBreakValue,
  isValidField,
  validateFields,
} = require('./validation');
const { userConfig } = require('../mocks');

describe('getBreakValues function', () => {
  it('returs all values of breakpoint from user config', () => {
    expect(getBreakValues(userConfig)).toEqual([
      '40em',
      '64em',
      '75em',
      '100em',
    ]);
  });
});

describe('isValidBreakValue', () => {
  it('returns `false` if value is not string', () => {
    expect(isValidBreakValue(12)).toEqual(false);
  });

  it('returns `true` if value contains pixels', () => {
    expect(isValidBreakValue('12px')).toEqual(true);
  });

  it('returns `true` if value contains ems', () => {
    expect(isValidBreakValue('12em')).toEqual(true);
  });
});

describe('isValidField', () => {
  it('returns `true` if value contain px', () => {
    expect(isValidField('12px')).toEqual(true);
  });

  it('returns `true` if value contain em', () => {
    expect(isValidField('12em')).toEqual(true);
  });
});

describe('validateFields function', () => {
  it('all breakpoints are valid', () => {
    expect(validateFields(userConfig)).toEqual(true);
  });
});
