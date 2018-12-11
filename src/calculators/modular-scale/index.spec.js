import { modularScale } from '.';

describe('calculators', () => {
  describe('calcFontSize', () => {
    it('calculated `font-size` if base is array of numbers', () => {
      expect(modularScale([16, 33, 15], 1.5, 7)).toEqual(49.5);
    });

    it('calculated `font-size` if base is array of numbers', () => {
      expect(modularScale(16, 1.333, 6)).toEqual(89.76372759879813);
    });
  });
});
