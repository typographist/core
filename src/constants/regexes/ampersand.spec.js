import { AMPERSAND } from '.';

describe('regexes', () => {
  describe('AMPERSAND regex', () => {
    it('should remove ampersand from selector', () => {
      expect(AMPERSAND.test('&__inner')).toEqual(true);
    });
  });
});
