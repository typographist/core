import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('AMPERSAND', () => {
    it('should remove ampersand from selector', () => {
      expect(R.test(regexes.AMPERSAND, '&__inner')).toEqual(true);
    });
  });
});
