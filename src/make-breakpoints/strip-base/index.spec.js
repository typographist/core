import { stripBase } from '.';

describe('make breakpoints', () => {
  describe('stripBase fn', () => {
    it('remove units from string', () => {
      const input = {
        base: '12px',
      };

      const output = {
        base: 12,
      };

      expect(stripBase(input)).toEqual(output);
    });

    it('remove units from array', () => {
      const input = {
        base: ['12px', '20px'],
      };

      const output = {
        base: [12, 20],
      };

      expect(stripBase(input)).toEqual(output);
    });
  });
});
