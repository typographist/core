// @flow

import { HALF } from '../constants';

import { calcLeading } from '../calculators/calc-leading';
import type { BreakStableRatio, BreakWithRoot } from '../models';

export const calcRoot = (x: number) => Math.round(x * HALF);

export const setPropRoot: (BreakStableRatio) => BreakWithRoot = (item) => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});
