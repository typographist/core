import * as R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('PX_OR_EM_FONT_SIZE_AT_BEGINNING_OF_STRING', () => {
    it('return `true` if contain positive integer mumber with pixels at the beggining of the string', () => {
      expect(
        R.test(
          constants.PX_OR_EM_FONT_SIZE_AT_BEGINNING_OF_STRING,
          '35px at 6',
        ),
      ).toEqual(true);
    });

    it('return `true` if contain positive integer mumber with ems at the beggining of the string', () => {
      expect(
        R.test(
          constants.PX_OR_EM_FONT_SIZE_AT_BEGINNING_OF_STRING,
          '35em at 6',
        ),
      ).toEqual(true);
    });

    it('return `true` if contain positive floating point mumber with ems at the beggining of the string', () => {
      expect(
        R.test(
          constants.PX_OR_EM_FONT_SIZE_AT_BEGINNING_OF_STRING,
          '3.5em at 6',
        ),
      ).toEqual(true);
    });

    it('return `false` if there are spaces at the beginning of the line', () => {
      expect(
        R.test(
          constants.PX_OR_EM_FONT_SIZE_AT_BEGINNING_OF_STRING,
          '   35px at 6',
        ),
      ).toEqual(false);
    });
  });
});