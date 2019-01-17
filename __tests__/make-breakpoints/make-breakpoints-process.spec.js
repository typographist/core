import { makeBreakpointsProcess } from '../../src/make-breakpoints/make-breakpoints-process';
import { userConfig } from '../../src/models/user-config';
import { breakpoints } from '../../src/models/breakpoints';

describe('makeBreakpointsProcess', () => {
  it('returns the breakpoint model', () => {
    expect(makeBreakpointsProcess(userConfig)).toEqual(breakpoints);
  });

  it('returns the breakpoint model from default user config', () => {
    expect(
      makeBreakpointsProcess({
        base: '16px',
        lineHeight: 1.5,
        ratio: 1.333,
      }),
    ).toEqual([
      {
        base: [16],
        lineHeight: 1.5,
        name: 'default',
        ratio: 1.333,
        root: 12,
        value: '0px',
      },
    ]);
  });
});
