import {
  calcRoot,
  setPropRoot,
} from '../../src/make-breakpoints/root-prop-utils';

describe('calcRoot', () => {
  it('calculated root', () => {
    expect(calcRoot(24)).toEqual(12);
  });
});

describe('setPropRoot', () => {
  it('adds the root property to the breakpoint', () => {
    expect(
      setPropRoot({
        value: '1200px',
        base: [16],
        lineHeight: 1.5,
        ratio: 1.618,
        name: 'tablet',
      }),
    ).toEqual({
      value: '1200px',
      base: [16],
      lineHeight: 1.5,
      ratio: 1.618,
      name: 'tablet',
      root: 12,
    });
  });
});
