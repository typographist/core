import * as R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS regex', () => {
    it('should replace dash, hyphen, whitespace and any characters', () => {
      const camelize = R.replace(
        constants.DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
        (match, chr) => (chr ? chr.toUpperCase() : ''),
      );

      expect(camelize('Hello_World')).toEqual('HelloWorld');
    });
  });
});
