import { toPxBreakValue } from '../../src/safe-make-breakpoints/to-px-break-value';

describe('toPxBreakValue', () => {
  it('returns the breakpoints value converted from em to px', () => {
    expect(
      toPxBreakValue({
        base: '16px',
        lineHeight: 1.5,
        name: 'tablet',
        ratio: 1.618,
        value: '40em',
      }),
    ).toEqual({
      base: '16px',
      lineHeight: 1.5,
      name: 'tablet',
      ratio: 1.618,
      value: '640px',
    });
  });
});
