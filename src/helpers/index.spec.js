import * as helpers from '.';
import { hasPx } from '../utils/validators';

describe('is', () => {
  it("returns `true` if it's a string", () => {
    expect(helpers.is(String)('yep')).toEqual(true);
  });

  it("returns `true` if it's a number", () => {
    expect(helpers.is(Number)(1)).toEqual(true);
  });

  it("returns `true` if it's a boolean", () => {
    expect(helpers.is(Boolean)(true)).toEqual(true);
  });

  it("returns `true` if it's a array", () => {
    expect(helpers.is(Array)([1, 2, 3])).toEqual(true);
  });

  it("returns `true` if it's a object", () => {
    expect(helpers.is(Object)({ a: 1 })).toEqual(true);
  });

  it("returns `false` if it's not a array", () => {
    expect(helpers.is(Array)(12)).toEqual(false);
  });
});

describe('type', () => {
  it('return `Number` type', () => {
    expect(helpers.type(1)).toEqual('Number');
  });

  it('return `String` type', () => {
    expect(helpers.type('str')).toEqual('String');
  });

  it('return `Boolean` type', () => {
    expect(helpers.type(true)).toEqual('Boolean');
  });

  it('return `Null` type', () => {
    expect(helpers.type(null)).toEqual('Null');
  });

  it('return `Undefined` type', () => {
    expect(helpers.type(undefined)).toEqual('Undefined');
  });

  it('return `Function` type', () => {
    const fn = (x) => x;
    expect(helpers.type(fn)).toEqual('Function');
  });

  it('return `Object` type', () => {
    expect(helpers.type({})).toEqual('Object');
  });

  it('return `Array` type', () => {
    expect(helpers.type([])).toEqual('Array');
  });
});

describe('objectValues', () => {
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

    expect(helpers.objectValues('d')(config)).toEqual([{ x: 9 }, { y: 9 }]);
  });
});

describe('head', () => {
  it('return the first element from the array', () => {
    expect(helpers.head([1, 2, 3])).toEqual(1);
  });
});

describe('tail', () => {
  it('return the array without the first element', () => {
    expect(helpers.tail([1, 2, 3])).toEqual([2, 3]);
  });
});

describe('every', () => {
  it('return `true` is the function argument meets all the above conditions', () => {
    expect(
      helpers.every((item) => typeof item === 'string')(['1', '2', '3']),
    ).toEqual(true);
  });

  it('return `false` is the function argument not meet all the above conditions', () => {
    expect(
      helpers.every((item) => typeof item === 'number')(['1', '2', '3']),
    ).toEqual(false);
  });
});

describe('all', () => {
  it('return `true` is the function argument meets all the above conditions', () => {
    const isString = (item) => typeof item === 'string';
    expect(helpers.all(isString, hasPx)('1px')).toEqual(true);
  });

  it('return `false` is the function argument not meet all the above conditions', () => {
    const isString = (item) => typeof item === 'string';
    expect(helpers.all(isString, hasPx)('1rem')).toEqual(false);
  });
});

describe('any', () => {
  it('return `true` is the function argument meets all the above conditions', () => {
    const isNumber = (item) => typeof item === 'number';
    expect(helpers.any(isNumber, hasPx)('1px')).toEqual(true);
  });

  it('return `false` is the function argument not meet all the above conditions', () => {
    const isNumber = (item) => typeof item === 'number';
    expect(helpers.any(isNumber, hasPx)('1rem')).toEqual(false);
  });
});

describe('pipe', () => {
  const sum = (x) => (y) => x + y;
  const mul = (x) => (y) => x * y;
  it('apply all functions to the argument from left to right and return the result', () => {
    expect(
      helpers.pipe(
        sum(2),
        mul(3),
      )(2),
    ).toEqual(12);
  });
});

describe('flatten', () => {
  it('converts from a multidimensional array to a flat array', () => {
    expect(
      helpers.flatten([['1em', '2em'], '17px', '18px', '20px', '22px']),
    ).toEqual(['1em', '2em', '17px', '18px', '20px', '22px']);
  });
});

describe('reduce', () => {
  it('reduces the argument passed', () => {
    expect(helpers.reduce((acc, item) => acc + item, 0)([1, 2, 3])).toEqual(6);
  });
});

describe('map', () => {
  it('creates a new array consisting of the results of the callback call for each element of the array', () => {
    expect(helpers.map((item) => item + 1)([1, 2, 3])).toEqual([2, 3, 4]);
  });

  it('creates a new object consisting of the results of the callback call for each creates a new object consisting of the callback results for each field of the object of the array', () => {
    expect(helpers.map((item) => item + 1)({ a: 1, b: 2, c: 3 })).toEqual({
      a: 2,
      b: 3,
      c: 4,
    });
  });
});

describe('filter', () => {
  it('return filtered array', () => {
    expect(helpers.filter((_) => _ > 1)([1, 2, 3, 4])).toEqual([2, 3, 4]);
  });

  it('return filtered Object', () => {
    expect(
      helpers.filter((item) => item > 1)({ a: 1, b: 2, c: 3, d: 4 }),
    ).toEqual({
      b: 2,
      c: 3,
      d: 4,
    });
  });
});

describe('invariant', () => {
  it('return object Error with error message', () => {
    expect(helpers.invariant).toThrow();
  });
});
