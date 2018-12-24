import * as R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('PX_OR_EM_FONT_SIZE', () => {
    it('returns `true` if string contain integer or floating point number with pixels', () => {
      expect(R.test(constants.PX_OR_EM_FONT_SIZE, '12px')).toEqual(true);
    });
  });
});
