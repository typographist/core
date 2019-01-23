import { basePropProcess } from '../../src/make-breakpoints/base-prop-process';

describe('basePropProcess', () => {
  it('breakpoint object with a base key containing an array of numbers', () => {
    expect(
      basePropProcess({
        base: ['1em'],
        lineHeight: 1.5,
        name: 'tablet',
        ratio: 1.618,
        value: '768px',
      }),
    ).toEqual({
      base: [16],
      lineHeight: 1.5,
      name: 'tablet',
      ratio: 1.618,
      value: '768px',
    });
  });
});
