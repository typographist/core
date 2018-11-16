import R from 'ramda';
import { REVERCE_BRACKET } from '.';

describe('regexes', () => {
  describe('REVERCE_BRACKET regex', () => {
    it('should remove reverce bracket', () => {
      expect(R.replace(REVERCE_BRACKET, '', '(12)')).toBe('(12');
    });
  });
});
