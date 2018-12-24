import * as R from 'ramda';
import { ALL_ROUND_BRACKETS } from '.';

describe('regexes', () => {
  describe('ALL_ROUND_BRACKETS regex', () => {
    it('should remove round brackets', () => {
      expect(R.replace(ALL_ROUND_BRACKETS, '', '(12)')).toEqual('12');
    });
  });
});
