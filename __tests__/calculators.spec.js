import { calcLeading } from '../src/calculators/calc-leading';
import { modularScale } from '../src/calculators/modular-scale';

describe('calculators', () => {
  describe('calcLeading', () => {
    it('should calc leading if base is array', () => {
      expect(calcLeading([16, 33], 1.5)).toEqual(24);
    });

    it('should calc leading if base is number', () => {
      expect(calcLeading([16], 1.5)).toEqual(24);
    });
  });

  describe('modularScale', () => {
    it('calculated `font-size` if base is array of numbers', () => {
      expect(modularScale({ base: [16, 33, 15], ratio: 1.5 })(7)).toEqual(49.5);
    });

    it('calculated `font-size` if base is array of numbers', () => {
      expect(modularScale({ base: [16], ratio: 1.333 })(6)).toEqual(
        89.76372759879813,
      );
    });
  });
});
