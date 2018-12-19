// @flow

import { HALF } from '../constants';

import { calcLeading } from '../calculators/calc-leading';
import type { FilledBreakpointStableRatio } from '../models';

export const calcRoot: number => number = x => Math.round(x * HALF);

export const setPropRoot = (item: FilledBreakpointStableRatio) => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});
