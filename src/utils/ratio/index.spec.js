import {
  getFontSizeFromRatio,
  getStepFromRatio,
  makeStepFromRatio,
  makeFontSizeFromRatio,
  calcRatio,
} from '.';

describe('getFontSizeFromRatio', () => {
  it('should found number with pixels', () => {
    expect(getFontSizeFromRatio('666px at 8')).toEqual(['666px']);
  });

  it('should found number with ems', () => {
    expect(getFontSizeFromRatio('666em at 8')).toEqual(['666em']);
  });

  it('should found floating point number with pixels', () => {
    expect(getFontSizeFromRatio('6.66px at 8')).toEqual(['6.66px']);
  });

  it('should found negative floating point number with with pixels', () => {
    expect(getFontSizeFromRatio('6.66px at 8')).toEqual(['6.66px']);
  });

  it('should not found matches ', () => {
    expect(getFontSizeFromRatio('6.66rem at 8')).toEqual(null);
  });
});

describe('getStepFromRatio', () => {
  it('should number after the word at', () => {
    expect(getStepFromRatio('666px at 8')).toEqual(['8']);
  });

  it('should negative number after the word at', () => {
    expect(getStepFromRatio('666px at -8')).toEqual(['-8']);
  });

  it('should floating-point number after the word at', () => {
    expect(getStepFromRatio('666px at 8.777')).toEqual(['8.777']);
  });

  it('should negative floating-point number after the word at', () => {
    expect(getStepFromRatio('666px at -8.777')).toEqual(['-8.777']);
  });

  it('should not support the units for the last found number', () => {
    expect(getStepFromRatio('666px at -8.777px')).toEqual(null);
  });
});

const ratio = '45px at 6';

describe('makeStepFromRatio', () => {
  it('returns step from ratio literal', () => {
    expect(makeStepFromRatio(ratio)).toEqual(6);
  });
});

describe('makeFontSizeFromRatio', () => {
  it('returns `font-size` from ratio literal', () => {
    expect(makeFontSizeFromRatio(ratio)).toEqual(45);
  });
});

describe('calcRatio', () => {
  it('calculate ratio', () => {
    expect(calcRatio(ratio, [16])).toEqual(1.1880883987824906);
  });
});
