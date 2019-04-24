import {
  getTailBreakpointsValues,
  getTailBreakpointsNames,
  makeBreakpointNamesList,
  makeBreakpoints,
  getInitialBreakpoint,
} from '.';
import { breakpointsModel, userConfig } from '../../mocks';

describe('getTailBreakpointsValues', () => {
  it('return thie breakpoints without default breakpoint', () => {
    expect(getTailBreakpointsValues(breakpointsModel)).toEqual([
      {
        base: [17],
        lineHeight: 1.5,
        ratio: 1.1761442744249144,
        root: 13,
        value: '768px',
      },
      {
        base: [18],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 15.5,
        value: '992px',
      },
      {
        base: [20],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 17,
        value: '1200px',
      },
      {
        base: [22],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 18.5,
        value: '1600px',
      },
    ]);
  });
});

describe('getTailBreakpointsNames', () => {
  it('return breakpoint names', () => {
    expect(getTailBreakpointsNames(breakpointsModel)).toEqual([
      'tablet',
      'desktop',
      'lgDesktop',
      'xlDesktop',
    ]);
  });
});

describe('makeBreakpointNamesList', () => {
  it('return a string of breakpoint names', () => {
    expect(makeBreakpointNamesList(breakpointsModel)).toEqual(
      "'tablet, desktop, lgDesktop, xlDesktop'",
    );
  });
});

describe('makeBreakpoints', () => {
  it('return breakpoints map', () => {
    expect(makeBreakpoints(userConfig)).toEqual({
      tablet: '768px',
      desktop: '992px',
      lgDesktop: '1200px',
      xlDesktop: '1600px',
    });
  });
});

describe('getInitialBreakpoint', () => {
  it('return first breakpoint', () => {
    expect(getInitialBreakpoint(breakpointsModel)).toEqual({
      base: [16, 32],
      lineHeight: 1.5,
      ratio: 1.1880883987824906,
      root: 12,
      value: '0px',
    });
  });
});
