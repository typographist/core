import R from 'ramda';
import { POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING } from '.';

describe('regexes', () => {
  describe('POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING regex', () => {
    it('should integer support', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '12',
        ),
      ).toBe(true);
    });

    it('should floating points support', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '1.2',
        ),
      ).toBe(true);
    });

    it('should negative meaning', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
        )('-7'),
      ).toBe(true);
    });

    it('should invalid number', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '1....2',
        ),
      ).toBe(false);
    });

    it('should negative floating point', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          '-7.777',
        ),
      ).toBe(true);
    });

    it('should not a number', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          'myNameIsMax',
        ),
      ).toBe(false);
    });

    it('should not a number', () => {
      expect(
        R.test(
          POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING,
          'myNameIsMax',
        ),
      ).toBe(false);
    });
  });
});
