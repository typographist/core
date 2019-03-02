// @flow

import type {
  Breakpoint,
  UserConfig,
  BreakpointsMap,
  Breakpoints,
} from '@models';
import * as R from 'ramda';
import { DEFAULT_BREAK, DEFAULT_BREAK_MAP } from '@constants';
import { makeBreakpointsMap } from '@make-breakpoints-map';

export const headOr: (Breakpoint[]) => Breakpoint = R.compose(
  R.defaultTo(DEFAULT_BREAK),
  R.head,
);

export const getBreaksMapOr: (UserConfig) => * = R.compose(
  R.defaultTo(DEFAULT_BREAK_MAP),
  makeBreakpointsMap,
);

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
