// @flow

import memoize from 'fast-memoize';
import { makeBreakpointsProcess } from './make-breakpoints-process';
import { validateUserConfig } from '../validate-user-config';
import { type UserConfig } from '../models';

const memoized = memoize(makeBreakpointsProcess);

/* eslint-disable consistent-return */

export const makeBreakpoints = (config: UserConfig) => {
  if (validateUserConfig(config)) {
    return memoized(config);
  }
};
/* eslint-enable */
