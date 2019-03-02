// @flow

import * as R from 'ramda';
import { toPxBreakValue } from './to-px-break-value';
import { basePropProcess } from './base-prop-process';
import { createBreakpoints } from './create-breakpoints';
import { renameProp } from './rename-prop';
import { inheritPropsProcess } from './inherit-props';
import { calcRatioProcess } from './ratio-prop-utils';
import { setPropRoot } from './root-prop-utils';
import { makeBreakMap } from './make-break-map';
import type {
  UserConfig,
  BreakpointsModel,
  NotFilledNamedBreak,
  NotFilledRenamedBreak,
} from '../models';

export const makeBreakpointsProcess: (UserConfig) => BreakpointsModel = R.compose(
  R.compose(
    R.map(R.omit(['name'])),
    R.reduce(makeBreakMap, {}),
  ),
  R.map(
    R.compose(
      setPropRoot,
      calcRatioProcess,
    ),
  ),
  R.map(basePropProcess),
  inheritPropsProcess,
  R.map(
    R.compose(
      toPxBreakValue,
      renameProp<NotFilledNamedBreak, NotFilledRenamedBreak>(
        'breakpoint',
        'value',
      ),
    ),
  ),
  createBreakpoints,
);
