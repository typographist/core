import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('STEP_UNIT', () => {
    it('should find step unit', () => {
      expect(R.test(regexes.STEP_UNIT, 'step')).toEqual(true);
    });

    it('should not find step unit', () => {
      expect(R.test(regexes.STEP_UNIT, 'fake!')).toEqual(false);
    });
  });
});
