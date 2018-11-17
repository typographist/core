import { getAllValuesOf } from '.';

const config = {
  aa: 1,
  bb: 2,
  cc: {
    d: {
      x: 9,
    },
  },
  dd: {
    d: {
      y: 9,
    },
  },
};

describe('getAllValuesOf', () => {
  it('should', () => {
    expect(getAllValuesOf('d')(config)).toEqual([{ x: 9 }, { y: 9 }]);
  });
});
