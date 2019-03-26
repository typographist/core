import { makeBase, basePropProcess } from '.';

describe('makeBase', () => {
  it('returns an array with base value without units of measurement', () => {
    expect(makeBase('12px')).toEqual([12]);
  });

  it('returns an array with base value converted to pixels without units of measurement', () => {
    expect(makeBase('160px')).toEqual([160]);
  });
});

describe('basePropProcess', () => {
  it('return object with calculated base', () => {
    expect(basePropProcess({ base: '10px' })).toEqual({ base: [10] });
  });
});
