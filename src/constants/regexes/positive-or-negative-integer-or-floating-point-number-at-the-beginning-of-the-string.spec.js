import R from 'ramda';
import * as regexp from '.';

describe('regexes', () => {
  describe('POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING regex', () => {
    it('should integer support', () => {
      expect(
        R.test(
          regexp.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '12',
        ),
      ).toEqual(true);
    });

    it('should floating points support', () => {
      expect(
        R.test(
          regexp.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '1.2',
        ),
      ).toEqual(true);
    });

    it('should negative meaning', () => {
      expect(
        R.test(
          regexp.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '-7',
        ),
      ).toEqual(true);
    });

    it('should invalid number', () => {
      expect(
        R.test(
          regexp.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '1....2',
        ),
      ).toEqual(false);
    });

    it('should negative floating point', () => {
      expect(
        R.test(
          regexp.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '-7.777',
        ),
      ).toEqual(true);
    });

    it('should not a number', () => {
      expect(
        R.test(
          regexp.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          'myNameIsMax',
        ),
      ).toEqual(false);
    });

    it('should not a number', () => {
      expect(
        R.test(
          regexp.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          'myNameIsMax',
        ),
      ).toEqual(false);
    });
  });
});
