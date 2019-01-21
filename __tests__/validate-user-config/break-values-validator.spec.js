import { userConfig } from '../../src/models/user-config';
import {
  getBreakValues,
  hasPxOrEm,
  isValidBreakValue,
  eitherIsValidField,
  isValidField,
  validateFields,
} from '../../src/validate-user-config/break-values-validator';

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

describe('hasPxOrEm', () => {
  it("returns `false` if value doesn't contain px or em", () => {
    expect(hasPxOrEm(12)).toEqual(false);
  });

  it('returns `true` if value contains pixels', () => {
    expect(hasPxOrEm('12px')).toEqual(true);
  });

  it('returns `true` if value contained ems', () => {
    expect(hasPxOrEm('12em')).toEqual(true);
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

describe('eitherIsValidField', () => {
  it('returns `true` breakpoint value contains pixels', () => {
    expect(eitherIsValidField('1200px').isRight).toEqual(true);
  });

  it('returns `true` if the breakpoint value has ems', () => {
    expect(eitherIsValidField('40em').isRight).toEqual(true);
  });

  it("returns `false` if the breakpoint does't contain px or ems ", () => {
    expect(eitherIsValidField('40rem').isLeft).toEqual(true);
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
