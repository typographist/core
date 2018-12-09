import { toPxBase } from '.';

describe('make breakpoints', () => {
  describe('toPxBase fn', () => {
    it('convert base from ems to pixels', () => {
      expect(toPxBase({ base: '1em' })).toEqual({ base: '16px' });
    });

    it('convert base from ems to pixels', () => {
      expect(toPxBase({ base: ['1em', '2em'] })).toEqual({
        base: ['16px', '32px'],
      });
    });
  });
});
