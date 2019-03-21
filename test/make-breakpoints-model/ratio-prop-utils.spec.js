import {
  makeStepFromRatio,
  calcRatio,
  calcRatioProcess,
} from '../../src/make-breakpoints-model/ratio-prop-utils';
import { makeFontSizeFromRatio } from '../../src/utils/ratio';

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
    expect(calcRatio(ratio, [16, 32])).toEqual(1.1880883987824906);
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
