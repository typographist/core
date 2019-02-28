// @flow

import memoizeone from 'memoize-one';
import { validateUserConfig } from '@validate-user-config';
import { type UserConfig } from '@models/user-config';
import { type BreakpointsMap } from '@models/breakpoints';
import { makeBreakpointsProcess } from './make-breakpoints-process';

const memoizedMakeBreakpoints: (UserConfig) => BreakpointsMap = memoizeone(
  makeBreakpointsProcess,
);

/* eslint-disable consistent-return */
export const makeBreakpointsMap: (UserConfig) => * = (config) => {
  if (validateUserConfig(config)) {
    return memoizedMakeBreakpoints(config);
  }
};

/* eslint-enable */
