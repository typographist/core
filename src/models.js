// @flow

// userConfig models
export type UserConfigBreakpoint = {
  value: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number,
};

export type UserConfig = {
  base: string | string[],
  lineHeight: number,
  ratio: string | number,
  tablet: UserConfigBreakpoint,
  desktop: UserConfigBreakpoint,
  lgDesktop: UserConfigBreakpoint,
  xlDesktop: UserConfigBreakpoint,
};

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
