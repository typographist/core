import R from 'ramda';
import * as regexp from '.';

describe('regexes', () => {
  describe('AT_WORD regex', () => {
    it('should ratio string has `at` word', () => {
      expect(R.test(regexp.SPACE_AT_WORD_SPACE, '123px at 7')).toEqual(true);
    });

    it("should doesn't contain `at` word", () => {
      expect(R.test(regexp.SPACE_AT_WORD_SPACE, '123px  7px')).toEqual(false);
    });
  });
});
