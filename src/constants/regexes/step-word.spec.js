import R from 'ramda';
import { STEP_WORD } from '.';

describe('regexes', () => {
  describe('STEP_WORD regex', () => {
    it('should find step unit', () => {
      expect(R.test(STEP_WORD, 'step')).toEqual(true);
    });

    it('should not find step unit', () => {
      expect(R.test(STEP_WORD, 'fake!')).toEqual(false);
    });
  });
});
