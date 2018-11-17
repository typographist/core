import { userConfig as config } from '../../../mocks';
import {
  getRatios,
  isValidRatio,
  validateFieldWithException,
  validateFields,
} from '.';

describe('validateUserConfig', () => {
  describe('getRatios', () => {
    it('returns all values of the ratio', () => {
      expect(getRatios(config)).toEqual(['45px at 6', 1.333]);
    });
  });

  describe('isValidRatio', () => {
    it('if ratio contains the font size in pixels', () => {
      expect(isValidRatio('22px at 4')).toBe(true);
    });

    it('if ratio contains the font size in ems', () => {
      expect(isValidRatio('22em at 4')).toBe(true);
    });

    it('if ratio contains the `at` word', () => {
      expect(isValidRatio('22em at 4')).toBe(true);
    });

    it('ratio contains the step', () => {
      expect(isValidRatio('1em at -4')).toBe(true);
    });
  });

  describe('validateFieldWithException', () => {
    it('if ratio is the number', () => {
      expect(validateFieldWithException(1.333)).toBe(true);
    });

    it('if ratio is a valid string', () => {
      expect(validateFieldWithException('33px at 5')).toBe(true);
    });

    it('invalid ratio', () => {
      expect(validateFieldWithException).toThrowErrorMatchingSnapshot();
    });
  });
});
