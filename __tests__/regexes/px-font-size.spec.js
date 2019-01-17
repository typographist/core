import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('PX_FONT_SIZE', () => {
    it('should has pixels', () => {
      expect(R.test(regexes.PX_FONT_SIZE, '12px')).toEqual(true);
    });

    it('should floating-point number has pixels', () => {
      expect(R.test(regexes.PX_FONT_SIZE, '567.88px')).toEqual(true);
    });

    it('should does not contain pixels', () => {
      expect(R.test(regexes.PX_FONT_SIZE, '12rem')).toEqual(false);
    });

    it('should floating-point number does not contain pixels', () => {
      expect(R.test(regexes.PX_FONT_SIZE, '12.34rem')).toEqual(false);
    });
  });
});
