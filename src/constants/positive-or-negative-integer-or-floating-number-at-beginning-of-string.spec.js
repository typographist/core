import * as R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING regex', () => {
    it('should integer support', () => {
      expect(
        R.test(
          constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING,
          '12',
        ),
      ).toEqual(true);
    });

    it('should floating points support', () => {
      expect(
        R.test(
          constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING,
          '1.2',
        ),
      ).toEqual(true);
    });

    it('should negative meaning', () => {
      expect(
        R.test(
          constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING,
          '-7',
        ),
      ).toEqual(true);
    });

    it('should invalid number', () => {
      expect(
        R.test(
          constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING,
          '1....2',
        ),
      ).toEqual(false);
    });

    it('should negative floating point', () => {
      expect(
        R.test(
          constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING,
          '-7.777',
        ),
      ).toEqual(true);
    });

    it('should not a number', () => {
      expect(
        R.test(
          constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING,
          'myNameIsMax',
        ),
      ).toEqual(false);
    });

    it('should not a number', () => {
      expect(
        R.test(
          constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING,
          'myNameIsMax',
        ),
      ).toEqual(false);
    });
  });
});
