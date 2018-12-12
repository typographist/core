import { userConfig } from '../../mocks';
import {
  getBreakpoints,
  breakpointIsString,
  breakpointHasPxOrEm,
  validateFields,
} from '.';

describe('user config validators', () => {
  describe('breakpoints validator', () => {
    describe('getBreakpoints function', () => {
      it('returs all values of breakpoint from user config', () => {
        expect(getBreakpoints(userConfig)).toEqual([
          '40em',
          '64em',
          '75em',
          '100em',
        ]);
      });
    });

    describe('breakpointIsString function', () => {
      it('is valid breakpoint ', () => {
        expect(breakpointIsString('60')).toEqual(true);
      });
    });

    describe('breakpointHasPxOrEm function', () => {
      it('breakpoint value contains pixels', () => {
        expect(breakpointHasPxOrEm('1200px')).toEqual(true);
      });

      it('returns `true` if the breakpoint value has ems', () => {
        expect(breakpointHasPxOrEm).toThrowErrorMatchingSnapshot();
      });
    });

    describe('validateFields function', () => {
      it('all breakpoints are valid', () => {
        expect(validateFields(userConfig)).toEqual(true);
      });
    });
  });
});
