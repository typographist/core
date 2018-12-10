import R from 'ramda';
import { POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_WITH_STEP_WORD_AT_THE_BEGINNING_OF_THE_STRING } from '.';

describe('regexes', () => {
  describe('POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_WITH_STEP_WORD_AT_THE_BEGINNING_OF_THE_STRING regex', () => {
    it('should find number with step unit', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_WITH_STEP_WORD_AT_THE_BEGINNING_OF_THE_STRING,
          '12step',
        ),
      ).toEqual(true);
    });

    it('should find floating point number with step unit', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_WITH_STEP_WORD_AT_THE_BEGINNING_OF_THE_STRING,
          '12.5step',
        ),
      ).toEqual(true);
    });

    it('should find negative floating point number with step unit', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_WITH_STEP_WORD_AT_THE_BEGINNING_OF_THE_STRING,
          '-12.5step',
        ),
      ).toEqual(true);
    });

    it('should not find negative floating point number with px unit', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_WITH_STEP_WORD_AT_THE_BEGINNING_OF_THE_STRING,
          '-12.5px',
        ),
      ).toEqual(false);
    });
  });
});
