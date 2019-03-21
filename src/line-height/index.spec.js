const { getLineHeights } = require('./utils');
const {
  isValidLineHeight,
  isValidField,
  validateFields,
} = require('./validation');
const { userConfig } = require('../mocks');

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
