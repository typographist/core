import { userConfig as config } from '../../../mocks';
import {
  getBreakpoints,
  isStringWithExeption,
  hasPxWithException,
  validateFields,
} from '.';

describe('breakpoints validator', () => {
  describe('getBreakpoints', () => {
    it('returs all values of breakpoint from user config', () => {
      expect(getBreakpoints(config)).toEqual([
        '640px',
        '1024px',
        '1200px',
        '1600px',
      ]);
    });
  });

  describe('isStringWithExeption', () => {
    it('is valid breakpoint ', () => {
      expect(isStringWithExeption('60')).toBe(true);
    });
  });

  describe('hasPxWithException', () => {
    it('breakpoint value contains pixels', () => {
      expect(hasPxWithException('1200px')).toBe(true);
    });

    it('returns `true` if the breakpoint value has ems', () => {
      expect(hasPxWithException).toThrowErrorMatchingSnapshot();
    });
  });

  describe('validateFields', () => {
    it('all breakpoints are valid', () => {
      expect(validateFields(config)).toBe(true);
    });
  });
});
