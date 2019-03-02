// @flow

import { HALF } from '../constants';

import { calcLeading } from '../calculators';
import type { BreakStableRatio, BreakWithRoot } from '../models';

export const calcRoot = (leading: number) => leading * HALF;

export const setPropRoot: (BreakStableRatio) => BreakWithRoot = (item) => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});
