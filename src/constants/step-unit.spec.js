import R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('STEP_UNIT regex', () => {
    it('should find step unit', () => {
      expect(R.test(constants.STEP_UNIT, 'step')).toEqual(true);
    });

    it('should not find step unit', () => {
      expect(R.test(constants.STEP_UNIT, 'fake!')).toEqual(false);
    });
  });
});
