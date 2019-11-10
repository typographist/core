const {
  deepObjectValues,
  flatten,
  invariant,
  merge,
  omit,
  isNumeric,
} = require('../lib');

describe('merge', () => {
  it('merge all transfered objects', () => {
    expect(merge({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe('omit', () => {
  it('return object without a  parameter passed', () => {
    expect(omit('a', { a: 1, b: 2 })).toEqual({ b: 2 });
  });
});

describe('deepObjectValues', () => {
  it('return an array of a values from the object', () => {
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

    expect(deepObjectValues('d')(config)).toEqual([{ x: 9 }, { y: 9 }]);
  });
});

describe('flatten', () => {
  it('converts from a multidimensional array to a flat array', () => {
    expect(flatten([['1em', '2em'], '17px', '18px', '20px', '22px'])).toEqual([
      '1em',
      '2em',
      '17px',
      '18px',
      '20px',
      '22px',
    ]);
  });
});

describe('invariant', () => {
  it('return object Error with error message', () => {
    expect(invariant).toThrow();
  });
});

describe('isNumeric', () => {
  it('return `true` if the number', () => {
    expect(isNumeric(14.88)).toBe(true);
  });

  it('return `true` if the string contains number', () => {
    expect(isNumeric('111')).toBe(true);
  });

  it('return `true` if string contains number with units', () => {
    expect(isNumeric('56.78px')).toBe(false);
  });

  it('return `false` if is not a number', () => {
    expect(isNumeric(NaN)).toBe(false);
  });

  it('return `true` if is the boolean', () => {
    expect(isNumeric(false)).toBe(false);
  });

  it('return `true` if is Infinity number', () => {
    expect(isNumeric(Infinity)).toBe(false);
  });
});
