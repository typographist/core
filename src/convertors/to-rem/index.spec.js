import { toRem } from '.';

describe('convertors', () => {
  describe('toRem', () => {
    it('should convert to rem', () => {
      expect(toRem(12, [16])).toEqual('1.3333333333333333rem');
    });
  });
});
