import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('EM_FONT_SIZE_AT_BEGINNING_OF_STRING', () => {
    it('returns `true` if font-size contains ems', () => {
      expect(
        R.test(regexes.EM_FONT_SIZE_AT_BEGINNING_OF_STRING, '12em at 6'),
      ).toEqual(true);
    });
  });

  describe('EM_FONT_SIZE', () => {
    it('should has ems', () => {
      expect(R.test(regexes.EM_FONT_SIZE, '12em')).toEqual(true);
    });

    it('should floating-point number has ems', () => {
      expect(R.test(regexes.EM_FONT_SIZE, '567.89em')).toEqual(true);
    });

    it('should does not contain pixels', () => {
      expect(R.test(regexes.EM_FONT_SIZE, '12rem')).toEqual(false);
    });

    it('should floating-point number does not contain pixels', () => {
      expect(R.test(regexes.EM_FONT_SIZE, '99.2rem')).toEqual(false);
    });
  });
});