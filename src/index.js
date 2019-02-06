// @flow

export { modularScale } from './calculators/modular-scale';
export { makeBreakpointsMap } from './make-breakpoints-map';
export * as constants from './constants';
export { camelize } from './convertors/camelize';
export { normalizeString } from './convertors/normalize-string';
export { percentage } from './convertors/percentage';
export { toCebabCase } from './convertors/to-cebab-case';
export { toEmIfHasPx } from './convertors/to-em-if-has-px';
export { toPxIfHasEm } from './convertors/to-px-if-has-em';
export { toSnakeCase } from './convertors/to-snake-case';
export { isNumeric } from './helpers/is-numeric';
export type { BreakpointsMap, Breakpoint } from './models/breakpoints';
export type { UserConfig } from './models/user-config';

export const ratios = {
  AUGMENTED_FOURTH: 1.41421,
  DOUBLE_OCTAVE: 4,
  GOLDEN_SECTION: 1.618034,
  MAJOR_ELEVENTH: 2.666666667,
  MAJOR_SECOND: 1.125,
  MAJOR_SEVENTH: 1.875,
  MAJOR_SIXTH: 1.666666667,
  MAJOR_TENTH: 2.5,
  MAJOR_THIRD: 1.25,
  MAJOR_TWELFTH: 3,
  MINOR_SECOND: 1.066666667,
  MINOR_SEVENTH: 1.777777778,
  MINOR_THIRD: 1.2,
  OCTAVE: 2,
  PERFECT_FIFTH: 1.5,
  PERFECT_FOURTH: 1.333333333,
  PHI: 1.618034,
};
