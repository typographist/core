import * as R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('STEP_FONT_SIZE_AT_BEGINNING_OF_STRING regex', () => {
    it('should find number with step unit', () => {
      expect(
        R.test(constants.STEP_FONT_SIZE_AT_BEGINNING_OF_STRING, '12step'),
      ).toEqual(true);
    });

    it('should find floating point number with step unit', () => {
      expect(
        R.test(constants.STEP_FONT_SIZE_AT_BEGINNING_OF_STRING, '12.5step'),
      ).toEqual(true);
    });

    it('should find negative floating point number with step unit', () => {
      expect(
        R.test(constants.STEP_FONT_SIZE_AT_BEGINNING_OF_STRING, '-12.5step'),
      ).toEqual(true);
    });

    it('should not find negative floating point number with px unit', () => {
      expect(
        R.test(constants.STEP_FONT_SIZE_AT_BEGINNING_OF_STRING, '-12.5px'),
      ).toEqual(false);
    });
  });
});
