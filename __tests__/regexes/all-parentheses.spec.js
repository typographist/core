import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('ALL_PARENTHESES', () => {
    it('should remove round brackets', () => {
      expect(R.replace(regexes.ALL_PARENTHESES, '', '(12)')).toEqual('12');
    });
  });
});
