import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER', () => {
    it('should separate string', () => {
      expect(
        R.split(
          regexes.SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER,
          'HelloWorld',
        ),
      ).toEqual(['Hello', 'World']);
    });
  });
});
