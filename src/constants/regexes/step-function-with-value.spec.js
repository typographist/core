import R from 'ramda';
import * as regexp from '.';

describe('regexes regex', () => {
  describe('STEP_FUNCTION_WITH_VALUE', () => {
    it('should find step function', () => {
      expect(R.test(regexp.STEP_FUNCTION_WITH_VALUE, 'step(12)')).toEqual(true);
    });

    it('should not find step function', () => {
      expect(R.test(regexp.STEP_FUNCTION_WITH_VALUE, 'tstep(12))')).toEqual(
        false,
      );
    });
  });
});
