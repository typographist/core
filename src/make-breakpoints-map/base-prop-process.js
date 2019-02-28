// @flow

import * as R from 'ramda';
import { toArrIsNotArr } from '@convertors/to-arr-is-not-arr';
import { toPxIfHasEm } from '@convertors/to-px-if-has-em';

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
