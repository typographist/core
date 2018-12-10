import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT } from '.';

describe('regexes', () => {
  describe('INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT regex', () => {
    it('should has rems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '12rem'),
      ).toEqual(true);
    });

    it('should negative floating point number contains rems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '-12.34px'),
      ).toEqual(false);
    });

    it('should floating-point number has rems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '567.88rem'),
      ).toEqual(true);
    });

    it('should does not contain pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '12px'),
      ).toEqual(false);
    });

    it('should floating-point number does not contain rems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '12.34px'),
      ).toEqual(false);
    });
  });
});
