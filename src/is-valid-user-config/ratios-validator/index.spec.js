import { UserConfig } from '../../mocks';
import { getRatios, isValidRatio, ratioIsVAlid, validateFields } from '.';

describe('user config validators', () => {
  describe('ratios validator', () => {
    describe('getRatios function', () => {
      it('returns all values of the ratio', () => {
        expect(getRatios(UserConfig)).toEqual(['45px at 6', 1.333]);
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

    describe('ratioIsVAlid function', () => {
      it('if ratio is the number', () => {
        expect(ratioIsVAlid(1.333)).toEqual(true);
      });

      it('if ratio is a valid string', () => {
        expect(ratioIsVAlid('33px at 5')).toEqual(true);
      });

      it('invalid ratio', () => {
        expect(ratioIsVAlid).toThrowErrorMatchingSnapshot();
      });
    });

    describe('validateFields function', () => {
      it('is all ratios are valid', () => {
        expect(validateFields(UserConfig)).toEqual(true);
      });
    });
  });
});
