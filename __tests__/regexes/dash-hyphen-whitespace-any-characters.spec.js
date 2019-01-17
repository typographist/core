import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS', () => {
    it('should replace dash, hyphen, whitespace and any characters', () => {
      const camelize = R.replace(
        regexes.DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
        (match, chr) => (chr ? chr.toUpperCase() : ''),
      );

      expect(camelize('Hello_World')).toEqual('HelloWorld');
    });
  });
});
