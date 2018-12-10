import { toNormalCase } from '.';

describe('convertors', () => {
  describe('toNormalCase', () => {
    it('should convert to normal case', () => {
      expect(toNormalCase('camelCaseNotation')).toEqual('camel case notation');
    });
  });
});
