import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT } from '.';

describe('regexes', () => {
  describe('INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT regex', () => {
    it('should has rems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '12rem'),
      ).toBe(true);
    });

    it('should negative floating point number contains rems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '-12.34px'),
      ).toBe(false);
    });

    it('should floating-point number has rems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '567.88rem'),
      ).toBe(true);
    });

    it('should does not contain pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '12px'),
      ).toBe(false);
    });

    it('should floating-point number does not contain rems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT, '12.34px'),
      ).toBe(false);
    });
  });
});
