import { makeBreakpointsProcess } from '../../src/make-breakpoints-model/make-breakpoints-model-process';
import { userConfig, breakpointsModel } from '../../src/mocks';

describe('makeBreakpointsProcess', () => {
  it('returns a breakpoints model', () => {
    expect(makeBreakpointsProcess(userConfig)).toEqual(breakpointsModel);
  });

  it('returns breakpoints model from default config with breakpoints values', () => {
    expect(
      makeBreakpointsProcess({
        base: '16px',
        lineHeight: 1.5,
        ratio: 1.333,
        sm: {
          breakpoint: '768px',
        },
        md: {
          breakpoint: '992px',
        },
        lg: {
          breakpoint: '1200px',
        },
      }),
    ).toEqual({
      default: {
        base: [16],
        lineHeight: 1.5,
        ratio: 1.333,
        root: 12,
        value: '0px',
      },
      sm: {
        base: [16],
        lineHeight: 1.5,
        ratio: 1.333,
        root: 12,
        value: '768px',
      },
      md: {
        base: [16],
        lineHeight: 1.5,
        ratio: 1.333,
        root: 12,
        value: '992px',
      },
      lg: {
        base: [16],
        lineHeight: 1.5,
        ratio: 1.333,
        root: 12,
        value: '1200px',
      },
    });
  });

  it('returns a breakpoints model from default user config', () => {
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
