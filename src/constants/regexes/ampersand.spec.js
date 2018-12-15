import R from 'ramda';
import { AMPERSAND } from '.';

describe('regexes', () => {
  describe('AMPERSAND regex', () => {
    it('should remove ampersand from selector', () => {
      expect(R.test(AMPERSAND, '&__inner')).toEqual(true);
    });
  });
});
