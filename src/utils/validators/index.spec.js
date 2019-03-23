const {
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
  hasPx,
  hasEm,
  hasPxOrEm,
  isValidStep,
} = require('.');

describe('ratioHasFontSize', () => {
  it('return `true` if contain positive floating point mumber with ems at the beggining of the string', () => {
    expect(ratioHasFontSize('3.5em at 6')).toEqual(true);
  });
  it('return `true` if contain positive integer mumber with ems at the beggining of the string', () => {
    expect(ratioHasFontSize('35em at 6')).toEqual(true);
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

describe('hasEm', () => {
  it('returns `true` if value contains em', () => {
    expect(hasEm('12em')).toEqual(true);
  });

  it("returns `false` if value doesn't contain px", () => {
    expect(hasEm(12)).toEqual(false);
  });
});

describe('hasPxOrEm', () => {
  it("returns `false` if value doesn't contain px or em", () => {
    expect(hasPxOrEm(12)).toEqual(false);
  });

  it('returns `true` if value contains pixels', () => {
    expect(hasPxOrEm('12px')).toEqual(true);
  });

  it('returns `true` if value contained ems', () => {
    expect(hasPxOrEm('12em')).toEqual(true);
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
