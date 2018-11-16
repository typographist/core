import R from 'ramda';
import { SPACE_AT_WORD_SPACE } from '.';

describe('regexes', () => {
  describe('AT_WORD regex', () => {
    it('should ratio string has `at` word', () => {
      expect(R.test(SPACE_AT_WORD_SPACE, '123px at 7')).toBe(true);
    });

    it("should doesn't contain `at` word", () => {
      expect(R.test(SPACE_AT_WORD_SPACE, '123px  7px')).toBe(false);
    });
  });
});
