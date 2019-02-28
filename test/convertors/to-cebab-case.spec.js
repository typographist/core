import { toCebabCase } from '@convertors/to-cebab-case';

describe('toCebabCase', () => {
  it('convert string to cebab case notation', () => {
    expect(toCebabCase('HelloWorld')).toEqual('hello-world');
  });
});
