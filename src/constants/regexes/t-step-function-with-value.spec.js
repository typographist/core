import R from 'ramda';
import { TSTEP_FUNCTION_WITH_VALUE } from '.';

describe('regexes regex', () => {
  describe('TSTEP_FUNCTION_WITH_VALUE', () => {
    it('should find t-step function', () => {
      expect(R.test(TSTEP_FUNCTION_WITH_VALUE, 't-step(12)')).toEqual(true);
    });

    it('should not find t-step function', () => {
      expect(R.test(TSTEP_FUNCTION_WITH_VALUE, 'tt-step(12))')).toEqual(false);
    });
  });
});
