import { toEmIfHasPx } from '@convertors/to-em';

describe('toEmIfHasPx', () => {
  it('should convert to em if has pixels', () => {
    expect(toEmIfHasPx('32px')).toEqual('2em');
  });

  it('should return value in ems', () => {
    expect(toEmIfHasPx('32em')).toEqual('32em');
  });
});
