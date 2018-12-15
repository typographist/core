import R from 'ramda';
import * as regexp from '.';

describe('regexes', () => {
  describe('INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT regex', () => {
    it('should has pixels', () => {
      expect(
        R.test(regexp.INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT, '12px'),
      ).toEqual(true);
    });

    it('should floating-point number has pixels', () => {
      expect(
        R.test(
          regexp.INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT,
          '567.88px',
        ),
      ).toEqual(true);
    });

    it('should does not contain pixels', () => {
      expect(
        R.test(regexp.INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT, '12rem'),
      ).toEqual(false);
    });

    it('should floating-point number does not contain pixels', () => {
      expect(
        R.test(
          regexp.INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT,
          '12.34rem',
        ),
      ).toEqual(false);
    });
  });
});
