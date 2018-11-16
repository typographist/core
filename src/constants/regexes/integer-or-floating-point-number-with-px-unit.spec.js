import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT } from '.';

describe('regexes', () => {
  describe('INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT regex', () => {
    it('should has pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT, '12px'),
      ).toBe(true);
    });

    it('should floating-point number has pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT, '567.88px'),
      ).toBe(true);
    });

    it('should does not contain pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT, '12rem'),
      ).toBe(false);
    });

    it('should floating-point number does not contain pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT, '12.34rem'),
      ).toBe(false);
    });
  });
});
