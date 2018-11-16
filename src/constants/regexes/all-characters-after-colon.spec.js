import { ALL_CHARACTERS_AFTER_COLON } from '.';

describe('regexes', () => {
  describe('ALL_CHARACTERS_AFTER_COLON regex', () => {
    it('should return all characters after colon', () => {
      expect(
        '(tablet, desktop):portrait'.replace(ALL_CHARACTERS_AFTER_COLON, ''),
      ).toBe('(tablet, desktop)');
    });
  });
});
