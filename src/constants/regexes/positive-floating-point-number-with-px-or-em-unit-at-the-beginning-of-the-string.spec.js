import R from 'ramda';
import * as regexp from '.';

describe('regexes', () => {
  describe('POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING', () => {
    it('return `true` if contain positive integer mumber with pixels at the beggining of the string', () => {
      expect(
        R.test(
          regexp.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
          '35px at 6',
        ),
      ).toEqual(true);
    });

    it('return `true` if contain positive integer mumber with ems at the beggining of the string', () => {
      expect(
        R.test(
          regexp.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
          '35em at 6',
        ),
      ).toEqual(true);
    });

    it('return `true` if contain positive floating point mumber with ems at the beggining of the string', () => {
      expect(
        R.test(
          regexp.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
          '3.5em at 6',
        ),
      ).toEqual(true);
    });

    it('return `false` if there are spaces at the beginning of the line', () => {
      expect(
        R.test(
          regexp.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
          '   35px at 6',
        ),
      ).toEqual(false);
    });
  });
});
