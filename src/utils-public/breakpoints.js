import * as R from 'ramda';
import { getBreaksMapOr, headOr } from '@utils';

export const getBreaksWithoutDefault: (BreakpointsMap) => * = R.compose(
  R.tail,
  R.values,
);

export const getBreakNames: (BreakpointsMap) => string[] = R.compose(
  R.tail,
  R.keys,
);

export const makeBreakNamesRow = (breaksMap: BreakpointsMap) =>
  `'${getBreakNames(breaksMap).join(', ')}'`;

export const makeBreakpoints: (UserConfig) => Breakpoints = R.compose(
  R.dissoc('default'),
  R.map(R.prop('value')),
  getBreaksMapOr,
);

export const getDefaultBreak: (BreakpointsMap) => Breakpoint = R.compose(
  headOr,
  R.values,
);
