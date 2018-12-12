import { userConfig } from '../../mocks';
import { getRatios, isValidRatio, ratioIsValid, validateFields } from '.';

describe('user config validators', () => {
  describe('ratios validator', () => {
    describe('getRatios function', () => {
      it('returns all values of the ratio', () => {
        expect(getRatios(userConfig)).toEqual(['45px at 6', 1.333]);
      });
    });

    describe('isValidRatio function', () => {
      it('if ratio contains the font size in pixels', () => {
        expect(isValidRatio('22px at 4')).toEqual(true);
      });

      it('if ratio contains the font size in ems', () => {
        expect(isValidRatio('22em at 4')).toEqual(true);
      });

      it('if ratio contains the `at` word', () => {
        expect(isValidRatio('22em at 4')).toEqual(true);
      });

      it('ratio contains the step', () => {
        expect(isValidRatio('1em at -4')).toEqual(true);
      });
    });

    describe('ratioIsValid function', () => {
      it('if ratio is the number', () => {
        expect(ratioIsValid(1.333)).toEqual(true);
      });

      it('if ratio is a valid string', () => {
        expect(ratioIsValid('33px at 5')).toEqual(true);
      });

      it('invalid ratio', () => {
        expect(ratioIsValid).toThrowErrorMatchingSnapshot();
      });
    });

    describe('validateFields function', () => {
      it('is all ratios are valid', () => {
        expect(validateFields(userConfig)).toEqual(true);
      });
    });
  });
});
