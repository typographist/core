import { objectValues } from '../../src/utils/deeper-object-values';

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

describe('objectValues', () => {
  it('should', () => {
    expect(objectValues('d')(config)).toEqual([{ x: 9 }, { y: 9 }]);
  });
});
