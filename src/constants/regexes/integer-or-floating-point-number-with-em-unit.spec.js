import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT } from '.';

describe('regexes', () => {
  describe('INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT regex', () => {
    it('should has ems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT, '12em'),
      ).toBe(true);
    });

    it('should floating-point number has ems', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT, '567.89em'),
      ).toBe(true);
    });

    it('should does not contain pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT, '12rem'),
      ).toBe(false);
    });

    it('should floating-point number does not contain pixels', () => {
      expect(
        R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT, '99.2rem'),
      ).toBe(false);
    });
  });
});
