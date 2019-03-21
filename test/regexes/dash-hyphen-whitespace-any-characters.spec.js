import { DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS } from '../../src/constants';

describe('DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS', () => {
  it('should replace dash, hyphen, whitespace and any characters', () => {
    const camelize = (str) =>
      str.replace(DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS, (match, chr) =>
        chr ? chr.toUpperCase() : '',
      );

    expect(camelize('Hello_World')).toEqual('HelloWorld');
  });
});
