import isBreakpointName from '.';

const names = ['tablet', 'desktop', 'lgDesktop', 'xlDesktop'];

describe('Utils of breakpoints', () => {
  describe('isBreakpointName', () => {
    it('should if breakpoints has breakpoint name', () => {
      // expect(isBreakpointName(names, 'desktop')).toBe(true);
    });
    it('should if breakpoints not contains breakpoint name', () => {
      // expect(isBreakpointName(names, 'funckYeahhh!')).toBe(false);
    });
  });
});
