import * as R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('EM_FONT_SIZE_AT_BEGINNING_OF_STRING', () => {
    it('returns `true` if font-size contains ems', () => {
      expect(
        R.test(constants.EM_FONT_SIZE_AT_BEGINNING_OF_STRING, '12em at 6'),
      ).toEqual(true);
    });
  });
});
