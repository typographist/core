import { userConfig as config } from '../../../mocks';
import { getLineHeights, isNumberWithException, validateFields } from '.';

describe('validateUserConfig', () => {
  describe('LineHeightsValidator', () => {
    describe('isNumber', () => {
      it('if lineHeight is valid', () => {
        expect(isNumberWithException(1.4)).toBe(true);
      });

      it('if lineHeight is not a number', () => {
        expect(isNumberWithException).toThrowErrorMatchingSnapshot();
      });
    });

    describe('getLineHeights', () => {
      it('returs all values of lineHeight from user config', () => {
        expect(getLineHeights(config)).toEqual([1.5, 1.7]);
      });
    });

    describe('validateFields', () => {
      it('all lineHeights are valid', () => {
        expect(validateFields(config)).toBe(true);
      });
    });
  });
});
