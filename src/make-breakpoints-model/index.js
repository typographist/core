// @flow

import memoizeone from 'memoize-one';
import { type UserConfig } from '../models/user-config';
import { type BreakpointsModel } from '../models/breakpoints';
import { validateUserConfig } from '../validate-user-config';
import { makeBreakpointsProcess } from './make-breakpoints-model-process';

const memoizedMakeBreakpoints: (UserConfig) => BreakpointsModel = memoizeone(
  makeBreakpointsProcess,
);

/* eslint-disable consistent-return */
export const makeBreakpointsModel: (UserConfig) => * = (config) => {
  if (validateUserConfig(config)) {
    return memoizedMakeBreakpoints(config);
  }
};

/* eslint-enable */
