import * as convertors from '../src/convertors';
import { breakpoints } from '../src/models/breakpoints';

describe('convertors', () => {
  describe('toRem', () => {
    it('should convert to rem', () => {
      const firstBreakpoint = breakpoints[0];

      expect(convertors.toRem(16, firstBreakpoint)).toEqual(
        '1.3333333333333333rem',
      );
    });
  });
});
