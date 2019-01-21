// @flow

import * as R from 'ramda';
import { toPxBreakValue } from './to-px-break-value';
import { basePropProcess } from './base-prop-process';
import { createBreakpoints } from './create-breakpoints';
import { renameProp } from './rename-prop';
import { inheritProps } from './inherit-props';
import { calcRatioProcess } from './ratio-prop-utils';
import { setPropRoot } from './root-prop-utils';
import { type Breakpoint } from '../models/breakpoints';
import { type UserConfig } from '../models/user-config';

export const makeBreakpointsProcess = (config: UserConfig): Breakpoint[] =>
  createBreakpoints(config)
    .map(
      R.compose(
        basePropProcess,
        toPxBreakValue,
        renameProp('breakpoint', 'value'),
      ),
    )
    .reduce(inheritProps, [])
    .map(
      R.compose(
        setPropRoot,
        calcRatioProcess,
      ),
    );
