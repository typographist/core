import { calcRatioFlow } from '.';

describe('make breaks model', () => {
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
        ratio: 1.1258335640240535,
        value: '640px',
      };

      expect(calcRatioFlow(input)).toEqual(output);
    });
  });
});
