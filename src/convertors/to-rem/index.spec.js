import { toRem } from '.';
import { breakpoints } from '../../mocks';

describe('convertors', () => {
  describe('toRem', () => {
    it('should convert to rem', () => {
      const firstBreakpoint = breakpoints[0];

      expect(toRem(16, firstBreakpoint)).toEqual('1.3333333333333333rem');
    });
  });
});
