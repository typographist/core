import { getFirstBase } from '.';

describe('getFirstBase', () => {
  it('should if base is array', () => {
    expect(getFirstBase([22, 11, 44])).toEqual(22);
  });

  it('should if base is number', () => {
    expect(getFirstBase(456.1)).toEqual(456.1);
  });
});
