import { calcRatio } from '.';

const ratio = '45px at 6';

describe('calculators', () => {
  describe('calcRatio', () => {
    it('return calculated ratio', () => {
      expect(calcRatio(ratio, 16)).toEqual(1.1880883987824906);
      expect(calcRatio(ratio, 17)).toEqual(1.1761442744249144);
      expect(calcRatio(ratio, 18)).toEqual(1.164993050750713);
    });
  });
});
