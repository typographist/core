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

export type Ratios = {
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
};

export const ratios: Ratios;

export function makeBreakpointsMap(x: object): IBreakpointMap;

export function modularScale(x: number, y: number[], z: number): number;
