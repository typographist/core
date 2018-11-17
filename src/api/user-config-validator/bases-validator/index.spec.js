import { userConfig as config } from '../../../mocks';
import {
  getBases,
  hasPxOrEmWithException,
  isValidField,
  validateFields,
} from '.';

describe('bases validator', () => {
  describe('getBases', () => {
    it('returs all values of base from user config', () => {
      expect(getBases(config)).toEqual([
        ['16px', '33px'],
        '17px',
        '18px',
        '20px',
        '22px',
      ]);
    });
  });

  describe('hasPxOrEmWithException', () => {
    it('if the base value has pixels', () => {
      expect(hasPxOrEmWithException('12px')).toBe(true);
    });

    it('if the value contain string with em unit', () => {
      expect(hasPxOrEmWithException('12em')).toBe(true);
    });

    it('if base contain invalid value', () => {
      expect(hasPxOrEmWithException).toThrowErrorMatchingSnapshot();
    });
  });

  describe('isValidField', () => {
    it('if the base field is Array of strings contain px unit', () => {
      expect(isValidField(['78px', '28px'])).toBe(true);
    });

    it('if the base is Array of strings contain em unit', () => {
      expect(isValidField(['78em', '28em'])).toBe(true);
    });

    it('if the base is Array of strings contain em unit', () => {
      expect(isValidField(['78em', '28em'])).toBe(true);
    });

    it('will throw an exception', () => {
      expect(isValidField).toThrowErrorMatchingSnapshot();
    });
  });

  describe('validateFields', () => {
    it('all bases are valid', () => {
      expect(validateFields(config)).toBe(true);
    });
  });
});
