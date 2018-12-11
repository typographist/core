import { calcRatioFlow } from '.';

describe('make breakpoints', () => {
  describe('calcRatioFlow', () => {
    it('calc ratio if ratio is string', () => {
      const input = {
        base: 17,
        lineHeight: 1.5,
        ratio: '45px at 6',
        value: '640px',
      };

      const output = {
        base: 17,
        lineHeight: 1.5,
        ratio: 1.1761442744249144,
        value: '640px',
      };

      expect(calcRatioFlow(input)).toEqual(output);
    });
  });
});
