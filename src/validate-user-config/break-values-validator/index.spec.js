import { userConfig } from '../../mocks';
import {
  getBreakValues,
  breakValIsStr,
  breakValHasPxOrEm,
  validateFields,
} from '.';

describe('user config validators', () => {
  describe('breakpoints validator', () => {
    describe('getBreakValues function', () => {
      it('returs all values of breakpoint from user config', () => {
        expect(getBreakValues(userConfig)).toEqual([
          '40em',
          '64em',
          '75em',
          '100em',
        ]);
      });
    });

    describe('breakValIsStr function', () => {
      it('is valid breakpoint ', () => {
        expect(breakValIsStr('60')).toEqual(true);
      });
    });

    describe('breakValHasPxOrEm function', () => {
      it('breakpoint value contains pixels', () => {
        expect(breakValHasPxOrEm('1200px')).toEqual(true);
      });

      it('returns `true` if the breakpoint value has ems', () => {
        expect(breakValHasPxOrEm).toThrowErrorMatchingSnapshot();
      });
    });

    describe('validateFields function', () => {
      it('all breakpoints are valid', () => {
        expect(validateFields(userConfig)).toEqual(true);
      });
    });
  });
});
