import { toCebabCase } from '.';

describe('convertors', () => {
  describe('toCebabCase', () => {
    it('convert string to cebab case notation', () => {
      expect(toCebabCase('HelloWorld')).toBe('hello-world');
    });
  });
});
