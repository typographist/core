import { percentage } from '.';

describe('convertors', () => {
  describe('percentage', () => {
    it('should convert to percents', () => {
      expect(percentage(16)).toEqual('100%');
    });
  });
});
