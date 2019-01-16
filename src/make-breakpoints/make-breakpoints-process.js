// @flow

import * as R from 'ramda';
import { toPxBreakValue } from './to-px-break-value';
import { basePropProcess } from './base-prop-process';
import { createBreakpoints } from './create-breakpoints';
import { inheritProps } from './inherit-props';
import { calcRatioProcess } from './ratio-prop-utils';
import { setPropRoot } from './root-prop-utils';
import { type Breakpoint } from '../models/breakpoints';
import { type UserConfig } from '../models/user-config';

export const makeBreakpointsProcess = (config: UserConfig): Breakpoint[] =>
  Array.prototype.concat
    .call([], createBreakpoints(config))
    .map(toPxBreakValue)
    .map(basePropProcess)
    .reduce(inheritProps, [])
    .map(
      R.compose(
        setPropRoot,
        calcRatioProcess,
      ),
    );
