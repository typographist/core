import { UserConfig as config } from '../../mocks';
import { getLineHeights, lineHeightIsNumber, validateFields } from '.';

describe('user config validators', () => {
  describe('line heights validator', () => {
    describe('lineHeightsValidator function', () => {
      describe('isNumber function', () => {
        it('if lineHeight is valid', () => {
          expect(lineHeightIsNumber(1.4)).toBe(true);
        });

        it('if lineHeight is not a number', () => {
          expect(lineHeightIsNumber).toThrowErrorMatchingSnapshot();
        });
      });

      describe('getLineHeights function', () => {
        it('returs all values of lineHeight from user config', () => {
          expect(getLineHeights(config)).toEqual([1.5, 1.7]);
        });
      });

      describe('validateFields function', () => {
        it('all lineHeights are valid', () => {
          expect(validateFields(config)).toBe(true);
        });
      });
    });
  });
});
