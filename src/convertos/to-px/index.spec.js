import { toPx } from '.';

describe('convertors', () => {
  describe('toPx', () => {
    it('should convert to px if has em unit', () => {
      expect(toPx('2em')).toBe('32px');
    });

    it('should return value in pixels', () => {
      expect(toPx('2px')).toBe('2px');
    });
  });
});
