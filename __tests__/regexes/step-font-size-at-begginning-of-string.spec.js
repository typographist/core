import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('STEP_FONT_SIZE_AT_BEGINNING_OF_STRING', () => {
    it('should find number with step unit', () => {
      expect(
        R.test(regexes.STEP_FONT_SIZE_AT_BEGINNING_OF_STRING, '12step'),
      ).toEqual(true);
    });

    it('should find floating point number with step unit', () => {
      expect(
        R.test(regexes.STEP_FONT_SIZE_AT_BEGINNING_OF_STRING, '12.5step'),
      ).toEqual(true);
    });

    it('should find negative floating point number with step unit', () => {
      expect(
        R.test(regexes.STEP_FONT_SIZE_AT_BEGINNING_OF_STRING, '-12.5step'),
      ).toEqual(true);
    });

    it('should not find negative floating point number with px unit', () => {
      expect(
        R.test(regexes.STEP_FONT_SIZE_AT_BEGINNING_OF_STRING, '-12.5px'),
      ).toEqual(false);
    });
  });
});
