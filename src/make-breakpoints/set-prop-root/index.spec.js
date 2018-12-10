import { setPropRoot } from '.';

describe('make breaks model', () => {
  describe('setPropRoot', () => {
    it('generate root prop for all breakpoints', () => {
      const input = {
        base: 18,
        lineHeight: 1.7,
        ratio: 1.333,
        value: '1024px',
      };

      const output = {
        base: 18,
        lineHeight: 1.7,
        ratio: 1.333,
        root: 16,
        value: '1024px',
      };
      expect(setPropRoot(input)).toEqual(output);
    });
  });
});
