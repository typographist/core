// @flow

import * as R from 'ramda';
import memoizeone from 'memoize-one';
import { makeBreakpointsProcess } from './make-breakpoints-process';
import { validateUserConfig } from '../validate-user-config';
import { type UserConfig } from '../models/user-config';

const memoizedMakeBreakpointsProcess = memoizeone(makeBreakpointsProcess);

export const makeBreakpoints: (UserConfig) => * = R.ifElse(
  validateUserConfig,
  memoizedMakeBreakpointsProcess,
  () => [],
);
