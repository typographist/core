import * as R from 'ramda';
import { ALL_CHARACTERS_AFTER_COLON } from '.';

describe('regexes', () => {
  describe('ALL_CHARACTERS_AFTER_COLON regex', () => {
    it('should return all characters after colon', () => {
      expect(
        R.replace(ALL_CHARACTERS_AFTER_COLON, '', '(tablet, desktop):portrait'),
      ).toEqual('(tablet, desktop)');
    });
  });
});
