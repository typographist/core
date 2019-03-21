const { camelize, normalizeString, toCebabCase, toSnakeCase } = require('.');

describe('camelize', () => {
  it('convert cebabcase string to camalcase', () => {
    expect(camelize('hello-world')).toEqual('helloWorld');
  });

  it('lowercase the first letter', () => {
    expect(camelize('HelloWorld')).toEqual('helloWorld');
  });

  it('converts string to camelcase', () => {
    expect(camelize('hello world')).toEqual('helloWorld');
  });

  it('converts snakecase string to camelcase', () => {
    expect(camelize('hello_world')).toEqual('helloWorld');
  });
});

describe('normalizeString', () => {
  it('returns a string with words separated by spaces', () => {
    expect(normalizeString('camelCaseNotation')).toEqual('camel case notation');
  });
});

describe('toCebabCase', () => {
  it('convert string to cebab case notation', () => {
    expect(toCebabCase('HelloWorld')).toEqual('hello-world');
  });
});

describe('toSnakeCase', () => {
  it('convert string to snake case notation', () => {
    expect(toSnakeCase('HelloWorld')).toEqual('hello_world');
  });
});
