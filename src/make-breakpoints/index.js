import memoizeone from 'memoize-one';
import { makeBreakpointsProcess } from './make-breakpoints-process';
import { validateUserConfig } from '../validate-user-config';

const memoizedMakeBreakpoints = memoizeone(makeBreakpointsProcess);

/* eslint-disable consistent-return */

// makeBreakpoints :: Object -> {a: Object}
export const makeBreakpoints = (config) => {
  if (validateUserConfig(config)) {
    return memoizedMakeBreakpoints(config);
  }
};

/* eslint-enable */
