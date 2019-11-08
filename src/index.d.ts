export interface IConfig {
  [key: string]: any;
}

export interface IBreakpoint {
  base: number[];
  lineHeight: number;
  ratio: number;
  root: number;
  value: string;
}

export interface IBreakpointMap {
  [key: string]: IBreakpoint;
}

export interface IRatios {
  AUGMENTED_FOURTH: number;
  DOUBLE_OCTAVE: number;
  GOLDEN_SECTION: number;
  MAJOR_ELEVENTH: number;
  MAJOR_SECOND: number;
  MAJOR_SEVENTH: number;
  MAJOR_SIXTH: number;
  MAJOR_TENTH: number;
  MAJOR_THIRD: number;
  MAJOR_TWELFTH: number;
  MINOR_SECOND: number;
  MINOR_SEVENTH: number;
  MINOR_THIRD: number;
  OCTAVE: number;
  PERFECT_FIFTH: number;
  PERFECT_FOURTH: number;
  PHI: number;
}

export function percentage(x: number | string): string;

export function toPx(x: string): string;

export function toEm(x: string): string;

export function toRem(x: number, y: number | string): string;

export function isNumeric(x: any): boolean;

export function invariant(x: any, y: string): void;

export function modularScale(x: number, y: number[], z: number);

export function makeBreakpointsMap(x: any): IBreakpointMap;

export function getBreakpointsMap(x: any): IBreakpointMap;
