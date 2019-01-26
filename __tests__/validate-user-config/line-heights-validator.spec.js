import { userConfig } from '../../src/models';
import {
  getLineHeights,
  isValidLineHeight,
  eitherIsValidField,
  isValidField,
  validateFields,
} from '../../src/validate-user-config/line-heights-validator';

describe('getLineHeights', () => {
  it('return all lineHeight values', () => {
    expect(getLineHeights(userConfig)).toEqual([1.5, 1.7]);
  });
});

describe('isValidLineHeight', () => {
  it('return `true` if numerical value', () => {
    expect(isValidLineHeight(1.4)).toEqual(true);
  });

  it('return `false` if not numerical value ', () => {
    expect(isValidLineHeight('1.4')).toEqual(false);
  });
});

describe('eitherIsValidField', () => {
  it('return `true` if is numerical value', () => {
    expect(eitherIsValidField(1).isRight).toEqual(true);
  });

  it('return `true` if not numerical value ', () => {
    expect(eitherIsValidField('1.4').isLeft).toEqual(true);
  });
});

describe('isValidField', () => {
  it('return `true` if lineHeight is valid', () => {
    expect(isValidField(1.2)).toEqual(true);
  });
});

describe('validateFields function', () => {
  it('all lineHeights are valid', () => {
    expect(validateFields(userConfig)).toEqual(true);
  });
});
