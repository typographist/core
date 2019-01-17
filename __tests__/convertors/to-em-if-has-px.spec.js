import { toEmIfHasPx } from '../../src/convertors/to-em-if-has-px';

describe('toEmIfHasPx', () => {
  it('should convert to em if has pixels', () => {
    expect(toEmIfHasPx('32px')).toEqual('2em');
  });

  it('should return value in ems', () => {
    expect(toEmIfHasPx('32em')).toEqual('32em');
  });
});
