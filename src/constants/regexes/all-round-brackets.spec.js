import { ALL_ROUND_BRACKETS } from '.';

describe('regexes', () => {
  describe('ALL_ROUND_BRACKETS regex', () => {
    it('should remove round brackets', () => {
      expect('(12)'.replace(ALL_ROUND_BRACKETS, '')).toBe('12');
    });
  });
});
