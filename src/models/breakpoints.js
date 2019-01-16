// @flow

export type NotFilledBreakpoint = {
  value: string,
  base?: number[],
  lineHeight?: number,
  ratio?: number | string,
  name: string,
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
