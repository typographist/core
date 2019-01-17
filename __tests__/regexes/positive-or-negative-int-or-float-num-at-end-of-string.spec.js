import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING', () => {
    it('should number after the word at', () => {
      expect(
        R.match(
          regexes.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING,
          '666px at 8',
        ),
      ).toEqual(['8']);
    });

    it('should negative number after the word at', () => {
      expect(
        R.match(
          regexes.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING,
          '666px at -8',
        ),
      ).toEqual(['-8']);
    });

    it('should floating-point number after the word at', () => {
      expect(
        R.match(
          regexes.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING,
          '666px at 8.777',
        ),
      ).toEqual(['8.777']);
    });

    it('should negative floating-point number after the word at', () => {
      expect(
        R.match(
          regexes.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING,
          '666px at -8.777',
        ),
      ).toEqual(['-8.777']);
    });

    it('should not support the units for the last found number', () => {
      expect(
        R.match(
          regexes.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING,
          '666px at -8.777px',
        ),
      ).toEqual([]);
    });
  });
});
