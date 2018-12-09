import { toNormalCase } from '.';

describe('convertors', () => {
  describe('toNormalCase', () => {
    it('should convert to normal case', () => {
      expect(toNormalCase('camelCaseNotation')).toBe('camel case notation');
    });
  });
});
