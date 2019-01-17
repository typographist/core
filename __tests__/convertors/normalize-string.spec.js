import { normalizeString } from '../../src/convertors/normalize-string';

describe('normalizeString', () => {
  it('returns a string with words separated by spaces', () => {
    expect(normalizeString('camelCaseNotation')).toEqual('camel case notation');
  });
});
