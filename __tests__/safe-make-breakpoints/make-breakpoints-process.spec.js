import { makeBreakpointsProcess } from '../../src/safe-make-breakpoints/make-breakpoints-process';
import { userConfig } from '../../src/models/user-config';
import { breakpointsMap } from '../../src/models/breakpoints';

describe('makeBreakpointsProcess', () => {
  it('returns the breakpoints map', () => {
    expect(makeBreakpointsProcess(userConfig)).toEqual(breakpointsMap);
  });

  it('returns the breakpoint model from default user config', () => {
    expect(
      makeBreakpointsProcess({
        base: '16px',
        lineHeight: 1.5,
        ratio: 1.333,
      }),
    ).toEqual({
      default: {
        base: [16],
        lineHeight: 1.5,
        ratio: 1.333,
        root: 12,
        value: '0px',
      },
    });
  });
});
