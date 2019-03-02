import { normalizeString } from '@utils-public/normalize-string';

describe('normalizeString', () => {
  it('returns a string with words separated by spaces', () => {
    expect(normalizeString('camelCaseNotation')).toEqual('camel case notation');
  });
});
