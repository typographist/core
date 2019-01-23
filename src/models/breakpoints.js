// @flow

export type NotFilledBreakpoint = {
  breakpoint: string,
  name: string,
  base?: number[],
  lineHeight?: number,
  ratio?: number | string,
};

export type NamedBreakpoint = {
  breakpoint: string,
  name: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
};

export type FilledBreakpoint = {|
  value: string,
  base: number[],
  lineHeight: number,
  ratio: number | string,
  name: string,
|};

export type FilledBreakpointStableRatio = {|
  value: string,
  base: number[],
  lineHeight: number,
  ratio: number,
  name: string,
|};

export type Breakpoint = {
  value: string,
  base: number[],
  lineHeight: number,
  ratio: number,
  root: number,
  name: string,
};

export const breakpoints: Breakpoint[] = [
  {
    base: [16, 32],
    lineHeight: 1.5,
    name: 'default',
    ratio: 1.1880883987824906,
    root: 12,
    value: '0px',
  },
  {
    base: [17],
    lineHeight: 1.5,
    name: 'tablet',
    ratio: 1.1761442744249144,
    root: 13,
    value: '640px',
  },
  {
    base: [18],
    lineHeight: 1.7,
    name: 'desktop',
    ratio: 1.333,
    root: 16,
    value: '1024px',
  },
  {
    base: [20],
    lineHeight: 1.7,
    name: 'lgDesktop',
    ratio: 1.333,
    root: 17,
    value: '1200px',
  },
  {
    base: [22],
    lineHeight: 1.7,
    name: 'xlDesktop',
    ratio: 1.333,
    root: 19,
    value: '1600px',
  },
];

export type BreakpointWithoutName = {
  value: string,
  base: number[],
  lineHeight: number,
  ratio: number,
  root: number,
};

type BreakpointsMap = {
  [string]: BreakpointWithoutName,
};

export const breakpointsMap: BreakpointsMap = {
  default: {
    base: [16, 32],
    lineHeight: 1.5,
    ratio: 1.1880883987824906,
    root: 12,
    value: '0px',
  },
  tablet: {
    base: [17],
    lineHeight: 1.5,
    ratio: 1.1761442744249144,
    root: 13,
    value: '640px',
  },
  desktop: {
    base: [18],
    lineHeight: 1.7,
    ratio: 1.333,
    root: 16,
    value: '1024px',
  },
  lgDesktop: {
    base: [20],
    lineHeight: 1.7,
    ratio: 1.333,
    root: 17,
    value: '1200px',
  },
  xlDesktop: {
    base: [22],
    lineHeight: 1.7,
    ratio: 1.333,
    root: 19,
    value: '1600px',
  },
};
