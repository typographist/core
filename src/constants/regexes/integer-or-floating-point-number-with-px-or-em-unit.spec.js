import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT } from '.';

describe('regexes', () => {
  describe('INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT', () => {
    it('returns `true` if string contain integer or floating point number with pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT, '12px'),
      ).toEqual(true);
    });
  });
});
