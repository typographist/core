import * as R from 'ramda';
import * as constants from '.';

describe('regexes', () => {
  describe('EM_FONT_SIZE regex', () => {
    it('should has ems', () => {
      expect(R.test(constants.EM_FONT_SIZE, '12em')).toEqual(true);
    });

    it('should floating-point number has ems', () => {
      expect(R.test(constants.EM_FONT_SIZE, '567.89em')).toEqual(true);
    });

    it('should does not contain pixels', () => {
      expect(R.test(constants.EM_FONT_SIZE, '12rem')).toEqual(false);
    });

    it('should floating-point number does not contain pixels', () => {
      expect(R.test(constants.EM_FONT_SIZE, '99.2rem')).toEqual(false);
    });
  });
});
