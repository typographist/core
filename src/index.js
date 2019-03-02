// @flow

export { makeBreakpointsModel } from '@make-breakpoints-model';
export * as constants from '@constants';
export { percentage } from '@convertors/percentage';
export { toEm } from '@convertors/to-em';
export { toPx } from '@convertors/to-px';
export { isNumeric } from '@utils/is-numeric';
export { camelize } from '@utils-public/camelize';
export { modularScale } from '@utils-public/modular-scale';
export { normalizeString } from '@utils-public/normalize-string';
export { toCebabCase } from '@utils-public/to-cebab-case';
export { toRem } from '@utils-public/to-rem';
export { toSnakeCase } from '@utils-public/to-snake-case';
export {
  getTailBreaksValues,
  getTailBreaksNames,
  makeBreakNamesRow,
  makeBreakpoints,
  getDefaultBreak,
} from '@utils-public/breakpoints';
export type { BreakpointsModel, Breakpoint } from '@models/breakpoints';
export type { UserConfig } from '@models/user-config';

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
