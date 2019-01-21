import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('VAL_IN_PX_OR_EM_AT_BEGINNING_OF_STRING', () => {
    it('return `true` if contain positive integer mumber with pixels at the beggining of the string', () => {
      expect(
        R.test(regexes.VAL_IN_PX_OR_EM_AT_BEGINNING_OF_STRING, '35px at 6'),
      ).toEqual(true);
    });

    it('return `true` if contain positive integer mumber with ems at the beggining of the string', () => {
      expect(
        R.test(regexes.VAL_IN_PX_OR_EM_AT_BEGINNING_OF_STRING, '35em at 6'),
      ).toEqual(true);
    });

    it('return `true` if contain positive floating point mumber with ems at the beggining of the string', () => {
      expect(
        R.test(regexes.VAL_IN_PX_OR_EM_AT_BEGINNING_OF_STRING, '3.5em at 6'),
      ).toEqual(true);
    });

    it('return `false` if there are spaces at the beginning of the line', () => {
      expect(
        R.test(regexes.VAL_IN_PX_OR_EM_AT_BEGINNING_OF_STRING, '   35px at 6'),
      ).toEqual(false);
    });
  });

  describe('VAL_IN_PX_OR_EM', () => {
    it('returns `true` if string contain integer or floating point number with pixels', () => {
      expect(R.test(regexes.VAL_IN_PX_OR_EM, '12px')).toEqual(true);
    });
  });
});
