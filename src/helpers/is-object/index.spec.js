import { isObject } from '.';

describe('isObject', () => {
  it('should be the object', () => {
    expect(isObject({ value: 1 })).toEqual(true);
  });

  it('should not be an object', () => {
    expect(isObject('fake')).toEqual(false);
  });
});
