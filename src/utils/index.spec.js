import {
  getFirstLetter,
  getWordTail,
  camelize,
  normalizeString,
  toKebabCase,
  toSnakeCase,
  separateWords,
} from '.';

describe('getFirstLetter', () => {
  it('return first letter from string', () => {
    expect(getFirstLetter('mommy')).toEqual('m');
  });
});

describe('getWordTail', () => {
  it('return the tail of the word', () => {
    expect(getWordTail('Typographist')).toEqual('ypographist');
  });
});

describe('camelize', () => {
  it('convert cebabcase string to camal case', () => {
    expect(camelize('hello-world')).toEqual('helloWorld');
  });

  it('lowercase the first letter', () => {
    expect(camelize('HelloWorld')).toEqual('helloWorld');
  });

  it('converts string to camel case', () => {
    expect(camelize('hello world')).toEqual('helloWorld');
  });

  it('converts snakecase string to camel case', () => {
    expect(camelize('hello_world')).toEqual('helloWorld');
  });
});

describe('normalizeString', () => {
  it('returns a string with words separated by spaces', () => {
    expect(normalizeString('camelCaseNotation')).toEqual('camel case notation');
  });
});

describe('toKebabCase', () => {
  it('convert string to kebab case notation', () => {
    expect(toKebabCase('HelloWorld')).toEqual('hello-world');
  });
});

describe('toSnakeCase', () => {
  it('convert string to snake case notation', () => {
    expect(toSnakeCase('HelloWorld')).toEqual('hello_world');
  });
});

describe('separateWords', () => {
  it('convert string to cebab case', () => {
    expect(separateWords('-')('helloWorld')).toEqual('hello-world');
  });

  it('convert string to snake case', () => {
    expect(separateWords('_')('helloWorld')).toEqual('hello_world');
  });

  it('convert string to normal case', () => {
    expect(separateWords(' ')('MyAwesomeFuckingSting')).toEqual(
      'my awesome fucking sting',
    );
  });

  it('separate word with default separator', () => {
    expect(separateWords()('HelloWorld')).toEqual('hello world');
  });
});
