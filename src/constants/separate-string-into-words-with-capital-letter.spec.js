import R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER regex', () => {
    it('should separate string', () => {
      expect(
        R.split(
          constants.SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER,
          'HelloWorld',
        ),
      ).toEqual(['Hello', 'World']);
    });
  });
});
