import { toArrIsNotArr } from '../../src/convertors/to-arr-is-not-arr';

describe('toArrIsNotArr', () => {
  it('converts to an array if the value is not an array', () => {
    expect(toArrIsNotArr('Typographist')).toEqual(['Typographist']);
  });

  it('returns the value unchanged if it is an array', () => {
    expect(toArrIsNotArr(['Typographist'])).toEqual(['Typographist']);
  });
});
