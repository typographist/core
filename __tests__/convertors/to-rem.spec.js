import { toRem } from '../../src/convertors/to-rem';
import { breakpoints } from '../../src/models/breakpoints';

describe('toRem', () => {
  it('should convert to rem', () => {
    const firstBreakpoint = breakpoints[0];

    expect(toRem(16, firstBreakpoint)).toEqual('1.3333333333333333rem');
  });
});
