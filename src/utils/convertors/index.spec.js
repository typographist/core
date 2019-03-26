const { percentage, toArrIsNotArr, toPx, toEm, toRem } = require('.');

describe('percentage', () => {
  it('should convert to percents', () => {
    expect(percentage(16)).toEqual('100%');
  });
});

describe('toArrIsNotArr', () => {
  it('converts to an array if the value is not an array', () => {
    expect(toArrIsNotArr('Typographist')).toEqual(['Typographist']);
  });

  it('returns the value unchanged if it is an array', () => {
    expect(toArrIsNotArr(['Typographist'])).toEqual(['Typographist']);
  });
});

describe('toPx', () => {
  it('converts the value in ems to the value in px', () => {
    expect(toPx('10em')).toEqual('160px');
  });
});

describe('toEm', () => {
  it('converts the value in px to the value in ems', () => {
    expect(toEm('160px')).toEqual('10em');
  });
});

describe('toRem', () => {
  it('converts the value in px to the value in rems', () => {
    expect(toRem(16, '24px')).toEqual('1.5rem');
  });

  it('extracts the value in pixels from the array and convers it to rem', () => {
    expect(toRem(16, ['24px'])).toEqual('1.5rem');
  });
});
