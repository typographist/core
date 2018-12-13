// @flow

import R from 'ramda';
import { createBreakpoints } from '../create-breakpoints';
import { toPxBase } from '../to-px-base';
import { toPxValue } from '../to-px-value';
import { inheritProps } from '../inherit-props';

import { stripBase } from '../strip-base';
import { calcRatioFlow } from '../calc-ratio-flow';
import { setPropRoot } from '../set-prop-root';
import type { Breakpoint, UserConfig } from '../../models';

const toArray = ({ base, ...item }) => ({
  ...item,
  base: Array.isArray(base) ? base : Array.of(base),
});

type MakeBreakpointsFlow = UserConfig => Breakpoint[];
export const makeBreakpointsFlow: MakeBreakpointsFlow = R.compose(
  R.map(
    R.compose(
      setPropRoot,
      calcRatioFlow,
    ),
  ),
  inheritProps,
  R.map(
    R.compose(
      stripBase,
      toPxBase,
      toArray,
    ),
  ),
  R.map(toPxValue),
  createBreakpoints,
);
