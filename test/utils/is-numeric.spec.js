import { isNumeric } from '@utils';

describe('isNumeric', () => {
  it('should if number', () => {
    expect(isNumeric(14.88)).toEqual(true);
  });

  it('should if string contains number', () => {
    expect(isNumeric('111')).toEqual(true);
  });

  it('should if string contains number with units', () => {
    expect(isNumeric('56.78px')).toEqual(false);
  });

  it('should if not a number', () => {
    expect(isNumeric(NaN)).toEqual(false);
  });

  it('should if boolean', () => {
    expect(isNumeric(false)).toEqual(false);
  });

  it('should if Infinity number', () => {
    expect(isNumeric(Infinity)).toEqual(false);
  });
});
