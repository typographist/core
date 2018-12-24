import * as R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('FONT_SIZE_PROP regex', () => {
    it('should has `font-size`', () => {
      expect(R.test(constants.FONT_SIZE_PROP, 'font-size')).toEqual(true);
    });

    it("should doesn't contain `font-size`", () => {
      expect(R.test(constants.FONT_SIZE_PROP, 'blabla')).toEqual(false);
    });
  });
});
