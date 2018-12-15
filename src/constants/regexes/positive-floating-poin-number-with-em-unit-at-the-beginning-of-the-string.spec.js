import R from 'ramda';
import * as regexp from '.';

describe('regexes', () => {
  describe('POSITIVE_FLOATING_POINT_NUMBER_WITH_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING', () => {
    it('returns `true` if font-size contains ems', () => {
      expect(
        R.test(
          regexp.POSITIVE_FLOATING_POINT_NUMBER_WITH_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
          '12em at 6',
        ),
      ).toEqual(true);
    });
  });
});
