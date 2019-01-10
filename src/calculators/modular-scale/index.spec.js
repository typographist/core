import { modularScale } from '.';

describe('calculators', () => {
  describe('calcFontSize', () => {
    it('calculated `font-size` if base is array of numbers', () => {
      expect(modularScale(7)({ base: [16, 33, 15], ratio: 1.5 })).toEqual(49.5);
    });

    it('calculated `font-size` if base is array of numbers', () => {
      expect(modularScale(6)({ base: [16], ratio: 1.333 })).toEqual(
        89.76372759879813,
      );
    });
  });
});
