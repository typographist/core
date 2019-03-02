import { deeperObjectValues } from '@utils';

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

describe('deeperObjectValues', () => {
  it('should', () => {
    expect(deeperObjectValues('d')(config)).toEqual([{ x: 9 }, { y: 9 }]);
  });
});
