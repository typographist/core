import R from 'ramda';
import * as regexp from '.';

describe('regexes', () => {
  describe('FONT_SIZE_PROP regex', () => {
    it('should has `font-size`', () => {
      expect(R.test(regexp.FONT_SIZE_PROP, 'font-size')).toEqual(true);
    });

    it("should doesn't contain `font-size`", () => {
      expect(R.test(regexp.FONT_SIZE_PROP, 'blabla')).toEqual(false);
    });
  });
});
