import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('FONT_SIZE_PROP', () => {
    it('should has `font-size`', () => {
      expect(R.test(regexes.FONT_SIZE_PROP, 'font-size')).toEqual(true);
    });

    it("should doesn't contain `font-size`", () => {
      expect(R.test(regexes.FONT_SIZE_PROP, 'blabla')).toEqual(false);
    });
  });
});
