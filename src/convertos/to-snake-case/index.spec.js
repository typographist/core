import { toSnakeCase } from '.';

describe('convertors', () => {
  describe('toSnakeCase', () => {
    it('convert string to snake case notation', () => {
      expect(toSnakeCase('HelloWorld')).toBe('hello_world');
    });
  });
});
