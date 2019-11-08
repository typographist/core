const { deepObjectValues, flatten, invariant } = require('../utils');

const {
  merge,
  omit,
  isNumeric,
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
  hasPx,
  isValidStep,
} = require('../utils');

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

describe('ratioHasFontSize', () => {
  it('return `false` if the font size does not contain pixels', () => {
    expect(ratioHasFontSize('35em at 6')).toEqual(false);
  });

  it('return `true` if contain positive integer mumber with pixels at the beggining of the string', () => {
    expect(ratioHasFontSize('35px at 6')).toEqual(true);
  });

  it('return `false` if there are spaces at the beginning of the line', () => {
    expect(ratioHasFontSize('   35px at 6')).toEqual(false);
  });
});

describe('ratioHasAtWord', () => {
  it('should ratio string has `at` word', () => {
    expect(ratioHasAtWord('123px at 7')).toEqual(true);
  });

  it("should doesn't contain `at` word", () => {
    expect(ratioHasAtWord('123px  7px')).toEqual(false);
  });
});

describe('ratioHasStep', () => {
  it('return `true` if it contains a negative integer number at end of a string', () => {
    expect(ratioHasStep('123px at -7')).toEqual(true);
  });

  it('return `true` if it contains a floating point number at end of a string', () => {
    expect(ratioHasStep('123px at 7.4')).toEqual(true);
  });

  it('return `true` if it contains a nagative floating point number at end of a string', () => {
    expect(ratioHasStep('123px at -7.4')).toEqual(true);
  });

  it('return `fase` if it contains a integer number with  units at end of a string', () => {
    expect(ratioHasStep('123px at 6px')).toEqual(false);
  });

  it('return `fase` if it contains a negative floating point number in px units at end of a string', () => {
    expect(ratioHasStep('123px at -6.7px')).toEqual(false);
  });
});

describe('hasPx', () => {
  it('returns `true` if value contains pixels', () => {
    expect(hasPx('12px')).toEqual(true);
  });

  it("returns `false` if value doesn't contain px", () => {
    expect(hasPx(12)).toEqual(false);
  });
});

describe('isValidStep', () => {
  it('should integer support', () => {
    expect(isValidStep('12')).toEqual(true);
  });

  it('should floating points support', () => {
    expect(isValidStep('1.2')).toEqual(true);
  });

  it('should negative meaning', () => {
    expect(isValidStep('-7')).toEqual(true);
  });

  it('should invalid number', () => {
    expect(isValidStep('1....2')).toEqual(false);
  });

  it('should negative floating point', () => {
    expect(isValidStep('-7.777')).toEqual(true);
  });

  it('return `false` is not numerical value', () => {
    expect(isValidStep('myNameIsMax')).toEqual(false);
  });
});
