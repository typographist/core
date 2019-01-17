import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes regex', () => {
  describe('STEP_FUNCTION_WITH_VALUE', () => {
    it('should find step function', () => {
      expect(R.test(regexes.STEP_FUNCTION_WITH_VALUE, 'step(12)')).toEqual(
        true,
      );
    });

    it('should not find step function', () => {
      expect(R.test(regexes.STEP_FUNCTION_WITH_VALUE, 'tstep(12))')).toEqual(
        false,
      );
    });
  });
});
