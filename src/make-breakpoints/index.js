// @flow

import memoizeone from 'memoize-one';
import { makeBreakpointsProcess } from './make-breakpoints-process';
import { validateUserConfig } from '../validate-user-config';
import { type UserConfig } from '../models/user-config';

const memoizedMakeBreakpointsProcess = memoizeone(makeBreakpointsProcess);

/* eslint-disable consistent-return */

export const makeBreakpoints = (config: UserConfig) => {
  if (validateUserConfig(config)) {
    return memoizedMakeBreakpointsProcess(config);
  }
};
/* eslint-enable */
