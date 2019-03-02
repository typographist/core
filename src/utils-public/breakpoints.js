// @flow

import * as R from 'ramda';
import { getBreaksModelOrDefaultModel } from '@utils/get-breaks-model-or-default-model';
import { headOr } from '@utils/head-or';
import type {
  BreakpointsModel,
  UserConfig,
  Breakpoints,
  Breakpoint,
} from '@models';

export const getTailBreaksValues: (BreakpointsModel) => * = R.compose(
  R.tail,
  R.values,
);

export const getTailBreaksNames: (BreakpointsModel) => string[] = R.compose(
  R.tail,
  R.keys,
);

export const makeBreakNamesRow = (breaksMap: BreakpointsModel) =>
  `'${getTailBreaksNames(breaksMap).join(', ')}'`;

export const makeBreakpoints: (UserConfig) => Breakpoints = R.compose(
  R.dissoc('default'),
  R.map(R.prop('value')),
  getBreaksModelOrDefaultModel,
);

export const getDefaultBreak: (BreakpointsModel) => Breakpoint = R.compose(
  headOr,
  R.values,
);
