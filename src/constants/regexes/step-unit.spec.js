import R from 'ramda';
import * as regexp from '.';

describe('regexes', () => {
  describe('STEP_UNIT regex', () => {
    it('should find step unit', () => {
      expect(R.test(regexp.STEP_UNIT, 'step')).toEqual(true);
    });

    it('should not find step unit', () => {
      expect(R.test(regexp.STEP_UNIT, 'fake!')).toEqual(false);
    });
  });
});
