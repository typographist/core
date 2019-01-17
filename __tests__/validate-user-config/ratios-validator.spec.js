import { userConfig } from '../../src/models/user-config';
import {
  getRatios,
  isValidRatioLiteral,
  isValidField,
  validateFields,
} from '../../src/validate-user-config/ratios-validator';

describe('user config validators', () => {
  describe('ratios validator', () => {
    describe('getRatios function', () => {
      it('returns all values of the ratio', () => {
        expect(getRatios(userConfig)).toEqual(['45px at 6', 1.333]);
      });
    });

    describe('isValidRatioLiteral function', () => {
      it('if ratio contains the font size in pixels', () => {
        expect(isValidRatioLiteral('22px at 4')).toEqual(true);
      });

      it('if ratio contains the font size in ems', () => {
        expect(isValidRatioLiteral('22em at 4')).toEqual(true);
      });

      it('if ratio contains the `at` word', () => {
        expect(isValidRatioLiteral('22em at 4')).toEqual(true);
      });

      it('ratio contains the step', () => {
        expect(isValidRatioLiteral('1em at -4')).toEqual(true);
      });
    });

    describe('isValidField function', () => {
      it('if ratio is the number', () => {
        expect(isValidField(1.333)).toEqual(true);
      });

      it('if ratio is a valid string', () => {
        expect(isValidField('33px at 5')).toEqual(true);
      });

      it('invalid ratio', () => {
        expect(isValidField).toThrowErrorMatchingSnapshot();
      });
    });

    describe('validateFields function', () => {
      it('is all ratios are valid', () => {
        expect(validateFields(userConfig)).toEqual(true);
      });
    });
  });
});
