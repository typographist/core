import { stripBase } from '.';

describe('stripBase', () => {
  it('should if base is string in px', () => {
    expect(stripBase('16px')).toBe(16);
  });

  it('should if base array of strings', () => {
    expect(stripBase(['16px', '33px'])).toEqual([16, 33]);
  });

  it('should if base in ems', () => {
    expect(stripBase('2em')).toBe(32);
  });
});
