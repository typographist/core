import { toRem } from '.';
import { getBase } from '../../helpers/get-base';
import { breakpointsModel } from '../../mocks';

describe('convertors', () => {
  describe('toRem', () => {
    const base = getBase(breakpointsModel[0].base);
    it('should convert to rem', () => {
      expect(toRem(base, breakpointsModel[0].root)).toBe(
        '1.3333333333333333rem',
      );
    });
  });
});
