import * as R from 'ramda';
import { DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS } from '@constants';

describe('DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS', () => {
  it('should replace dash, hyphen, whitespace and any characters', () => {
    const camelize = R.replace(
      DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
      (match, chr) => (chr ? chr.toUpperCase() : ''),
    );

    expect(camelize('Hello_World')).toEqual('HelloWorld');
  });
});
