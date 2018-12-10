import { getBase } from '.';

describe('getBase', () => {
  it('should if base is array', () => {
    expect(getBase([22, 11, 44])).toEqual(22);
  });

  it('should if base is number', () => {
    expect(getBase(456.1)).toEqual(456.1);
  });
});
