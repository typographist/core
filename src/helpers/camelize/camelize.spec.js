import { camelize } from '.';

describe('helpers', () => {
  describe('camelize', () => {
    it('should camelize string', () => {
      expect(camelize('hello-world', { separator: '-' })).toBe('helloWorld');
    });
  });
});
