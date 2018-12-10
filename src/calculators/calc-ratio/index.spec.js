import { getFontSize, getStep, calcRatio } from '.';

const ratio = '45px at 6';

describe('calculators', () => {
  describe('getFontSize fn', () => {
    it('return `font-size` from ratio', () => {
      expect(getFontSize(ratio)).toEqual(45);
    });
  });

  describe('getStep fn', () => {
    it('return `step` from ratio', () => {
      expect(getStep(ratio)).toEqual(6);
    });
  });

  describe('calcRatio', () => {
    it('return calculated ratio', () => {
      const fontSize = getFontSize(ratio);
      const step = getStep(ratio);

      expect(calcRatio(fontSize, step, 16)).toEqual(1.1880883987824906);

      expect(calcRatio(fontSize, step, 17)).toEqual(1.1761442744249144);

      expect(calcRatio(fontSize, step, 18)).toEqual(1.164993050750713);
    });
  });
});
