import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('BACKWARD_PARENTHESES', () => {
    it('should remove reverce bracket', () => {
      expect(R.replace(regexes.BACKWARD_PARENTHESES, '', '(12)')).toEqual(
        '(12',
      );
    });
  });
});
