import { toEm } from '.';

describe('convertors', () => {
  describe('toEm', () => {
    it('should convert to em if has pixels', () => {
      expect(toEm('32px')).toEqual('2em');
    });

    it('should return value in ems', () => {
      expect(toEm('32em')).toEqual('32em');
    });
  });
});
