const {
  isObject,
  isNumeric,
  isNumerical,
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
  hasPx,
  isValidStep,
} = require('.');

describe('isObject', () => {
  it('returns `true` if is the object', () => {
    expect(isObject({})).toEqual(true);
  });

  it("returns `true` if isn't object", () => {
    expect(isObject(1)).toEqual(false);
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

describe('isNumerical', () => {
  it('return `true` is a number', () => {
    expect(isNumerical(1)).toEqual(true);
  });

  it('return `false` is not a number', () => {
    expect(isNumerical('1')).toEqual(false);
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

// // describe('user config validators', () => {
// //   describe('isValidUserConfig function', () => {
// //     it('if valid user config ', () => {
// //       expect(isValidUserConfig(userConfig)).toEqual(true);
// //     });
// //   });
// // });
