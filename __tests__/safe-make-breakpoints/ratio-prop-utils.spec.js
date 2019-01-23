import {
  makeStepFromLiteral,
  makeFontSizeFromLiteral,
  calcRatio,
  calcRatioProcess,
} from '../../src/safe-make-breakpoints/ratio-prop-utils';

const ratioLiteral = '45px at 6';

describe('makeStepFromLiteral', () => {
  it('returns step from ratio literal', () => {
    expect(makeStepFromLiteral(ratioLiteral)).toEqual(6);
  });
});

describe('makeFontSizeFromLiteral', () => {
  it('returns `font-size` from ratio literal', () => {
    expect(makeFontSizeFromLiteral(ratioLiteral)).toEqual(45);
  });
});

describe('calcRatio', () => {
  it('calculate ratio', () => {
    expect(calcRatio(ratioLiteral, [16, 32])).toEqual(1.1880883987824906);
  });
});

describe('calcRatioProcess', () => {
  it('returns breakpoint with calculated ratio from ratio literal', () => {
    expect(
      calcRatioProcess({
        base: [16, 32],
        lineHeight: 1.5,
        name: 'default',
        ratio: '45px at 6',
        root: 12,
        value: '0px',
      }),
    ).toEqual({
      base: [16, 32],
      lineHeight: 1.5,
      name: 'default',
      ratio: 1.1880883987824906,
      root: 12,
      value: '0px',
    });
  });
});
