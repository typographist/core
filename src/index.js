export {
  is,
  type,
  head,
  tail,
  every,
  all,
  any,
  pipe,
  flatten,
  map,
  reduce,
  filter,
  invariant,
  createMemoize,
  invariantWithPrefix,
} from './lib';
export { isNumeric, hasPx } from './utils/validators';
export { camelize, normalizeString, toKebabCase, toSnakeCase } from './utils';
export { modularScale } from './utils/modular-scale';
export {
  getTailBreakpointsValues,
  getTailBreakpointsNames,
  makeBreakpointNamesList,
  makeBreakpoints,
  getInitialBreakpoint,
} from './utils/breakpoints';
export { makeBreakpointsModel } from './make-breakpoints-model';
export * as constants from './constants';
export { percentage, toEm, toPx, toRem } from './utils/convertors';

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
