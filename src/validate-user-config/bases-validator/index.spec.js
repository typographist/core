import { userConfig } from '../../mocks';
import { getBases, baseLiteralIsValid, isValidField, validateFields } from '.';

describe('bases validator', () => {
  describe('bases validator', () => {
    describe('getBases function', () => {
      it('returs all values of base from user config', () => {
        expect(getBases(userConfig)).toEqual([
          ['1em', '2em'],
          '17px',
          '18px',
          '20px',
          '22px',
        ]);
      });
    });

    describe('baseLiteralIsValid function', () => {
      it('if the base value has pixels', () => {
        expect(baseLiteralIsValid('12px')).toEqual(true);
      });

      it('if the value contain string with em unit', () => {
        expect(baseLiteralIsValid('12em')).toEqual(true);
      });

      it('if base contain invalid value', () => {
        expect(baseLiteralIsValid).toThrowErrorMatchingSnapshot();
      });
    });

    describe('isValidField function', () => {
      it('if the base field is Array of strings contain px unit', () => {
        expect(isValidField(['78px', '28px'])).toEqual(true);
      });

      it('if the base is Array of strings contain em unit', () => {
        expect(isValidField(['78em', '28em'])).toEqual(true);
      });

      it('if the base is Array of strings contain em unit', () => {
        expect(isValidField(['78em', '28em'])).toEqual(true);
      });

      it('will throw an exception', () => {
        expect(isValidField).toThrowErrorMatchingSnapshot();
      });
    });

    describe('validateFields function', () => {
      it('all bases are valid', () => {
        expect(validateFields(userConfig)).toEqual(true);
      });
    });
  });
});
