// @flow
import memoizeone from 'memoize-one';
import { makeBreakpointsProcess } from './make-breakpoints-process';
import { validateUserConfig } from '../validate-user-config';
import { type UserConfig } from '../models/user-config';
import { type BreakpointsMap } from '../models/breakpoints';

const memoizedMakeBreakpoints = memoizeone(makeBreakpointsProcess);

/* eslint-disable consistent-return */
export const makeBreakpoints = (config: UserConfig): BreakpointsMap | void => {
  if (validateUserConfig(config)) {
    return memoizedMakeBreakpoints(config);
  }
};

/* eslint-enable */
