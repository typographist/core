import { FONT_SIZE_WORD } from '.';

describe('regexes', () => {
  describe('FONT_SIZE_WORD regex', () => {
    it('should has `font-size`', () => {
      expect(FONT_SIZE_WORD.test('font-size')).toBe(true);
    });

    it("should doesn't contain `font-size`", () => {
      expect(FONT_SIZE_WORD.test('blabla')).toBe(false);
    });
  });
});
