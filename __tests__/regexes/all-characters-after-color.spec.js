import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('ALL_CHARACTERS_AFTER_COLON', () => {
    it('should return all characters after colon', () => {
      expect(
        R.replace(
          regexes.ALL_CHARACTERS_AFTER_COLON,
          '',
          '(tablet, desktop):portrait',
        ),
      ).toEqual('(tablet, desktop)');
    });
  });
});
