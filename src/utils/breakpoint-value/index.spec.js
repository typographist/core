import { toPxBreakValue } from '.';

describe('toPxBreakValue', () => {
  it('return the breakpoint value in pixels', () => {
    expect(toPxBreakValue({ value: '10em' })).toEqual({ value: '160px' });
  });
});
