// @flow

import R from 'ramda';
import { toPxValue } from './to-px-value';
import { basePropProcess } from './base-prop-utils';
import { createBreakpoints } from './create-breakpoints';
import { inheritProps } from './inherit-props';
import { calcRatioProcess } from './ratio-prop-utils';
import { setPropRoot } from './root-prop-utils';
import type { UserConfig, Breakpoint } from '../models';

export const makeBreakpointsProcess: UserConfig => Breakpoint[] = config =>
  Array.prototype.concat
    .call([], createBreakpoints(config))
    .map(toPxValue)
    .map(basePropProcess)
    .reduce(inheritProps, [])
    .map(
      R.compose(
        setPropRoot,
        calcRatioProcess,
      ),
    );
