import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('REM_FONT_SIZE', () => {
    it('should has rems', () => {
      expect(R.test(regexes.REM_FONT_SIZE, '12rem')).toEqual(true);
    });

    it('should negative floating point number contains rems', () => {
      expect(R.test(regexes.REM_FONT_SIZE, '-12.34px')).toEqual(false);
    });

    it('should floating-point number has rems', () => {
      expect(R.test(regexes.REM_FONT_SIZE, '567.88rem')).toEqual(true);
    });

    it('should does not contain pixels', () => {
      expect(R.test(regexes.REM_FONT_SIZE, '12px')).toEqual(false);
    });

    it('should floating-point number does not contain rems', () => {
      expect(R.test(regexes.REM_FONT_SIZE, '12.34px')).toEqual(false);
    });
  });
});
