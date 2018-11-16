import { getNameOfMinBreakpoint } from '.';
import { userConfig } from '../../../mocks';

describe('Utils of breakpoints', () => {
  describe('getNameOfMinBreakpoint', () => {
    it('should return the name of the minimum breakpoint', () => {
      // expect(getNameOfMinBreakpoint('lgDesktop', userConfig)).toBe('lgDesktop');
    });
    it('should return null if the name is not present in the user configuration', () => {
      // expect(getNameOfMinBreakpoint('md', userConfig)).toBe(null);
    });
  });
});
