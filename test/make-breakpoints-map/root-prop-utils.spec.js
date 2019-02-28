import {
  calcRoot,
  setPropRoot,
} from '@make-breakpoints-map/root-prop-utils';

describe('calcRoot', () => {
  it('calculated int root', () => {
    expect(calcRoot(24)).toEqual(12);
  });

  it('calculated float root', () => {
    expect(calcRoot(25)).toEqual(12.5);
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
