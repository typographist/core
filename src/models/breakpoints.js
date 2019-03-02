// @flow

export type UnstableDefaultBreak = {|
  base: string | string[],
  lineHeight: number,
  ratio: number | string,
  name: string,
  value: string,
|};

export type NotFilledDefaultBreakWithoutName = {|
  breakpoint: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
|};

export type NotFilledNamedBreak = {|
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
  name: string,
  breakpoint: string,
|};

export type NotFilledRenamedBreak = {|
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
  name: string,
  value: string,
|};

export type FillledBreak = {|
  base: string | string[],
  lineHeight: number,
  ratio: number | string,
  name: string,
  value: string,
|};

export type BreakStableBase = {|
  base: number[],
  lineHeight: number,
  ratio: number | string,
  name: string,
  value: string,
|};

export type BreakStableRatio = {|
  base: number[],
  lineHeight: number,
  ratio: number,
  name: string,
  value: string,
|};

export type BreakWithRoot = {|
  base: number[],
  lineHeight: number,
  ratio: number,
  name: string,
  value: string,
  root: number,
|};

export type BreakpointWithName = {|
  value: string,
  base: number[],
  lineHeight: number,
  ratio: number,
  root: number,
  name: string,
|};

export type UnstableBreaksMap = {
  [string]: BreakpointWithName,
};

export type Breakpoint = {|
  value: string,
  base: number[],
  lineHeight: number,
  ratio: number,
  root: number,
|};

export type BreakpointsMap = {
  [string]: Breakpoint,
};

export type Breakpoints = {
  [string]: string,
};
