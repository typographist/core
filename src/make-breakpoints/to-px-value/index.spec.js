import { toPxValue } from '.';

describe('make breakpoints', () => {
  describe('toPxValue fn', () => {
    it('convert base from ems to pixels', () => {
      expect(toPxValue({ value: '1em' })).toEqual({ value: '16px' });
    });
  });
});
