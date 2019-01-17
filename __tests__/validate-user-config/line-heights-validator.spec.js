import { userConfig } from '../../src/models/user-config';
import {
  getLineHeights,
  isValidField,
  validateFields,
} from '../../src/validate-user-config/line-heights-validator';

describe('user config validators', () => {
  describe('line heights validator', () => {
    describe('lineHeightsValidator function', () => {
      describe('isNumber function', () => {
        it('if lineHeight is valid', () => {
          expect(isValidField(1.4)).toEqual(true);
        });

        it('if lineHeight is not a number', () => {
          expect(isValidField).toThrowErrorMatchingSnapshot();
        });
      });

      describe('getLineHeights function', () => {
        it('returs all values of lineHeight from user config', () => {
          expect(getLineHeights(userConfig)).toEqual([1.5, 1.7]);
        });
      });

      describe('validateFields function', () => {
        it('all lineHeights are valid', () => {
          expect(validateFields(userConfig)).toEqual(true);
        });
      });
    });
  });
});
