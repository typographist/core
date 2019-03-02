// @flow

import * as R from 'ramda';
import { toPxIfHasEm } from '../convertors/to-px';
import { toArrIsNotArr } from '../convertors/to-arr-is-not-arr';

import type { FillledBreak, BreakStableBase } from '../models';

const makeBase: (string | string[]) => number[] = R.compose(
  R.map(
    R.compose(
      parseFloat,
      toPxIfHasEm,
    ),
  ),
  toArrIsNotArr,
);
export const basePropProcess: (FillledBreak) => BreakStableBase = ({
  base,
  ...item
}) => ({
  ...item,
  base: makeBase(base),
});
