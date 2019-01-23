// @flow
import * as R from 'ramda';
import { Just, Nothing } from 'igogo';
import memoizeone from 'memoize-one';
import { makeBreakpointsProcess } from './make-breakpoints-process';
import { validateUserConfig } from '../validate-user-config';
import { type UserConfig } from '../models/user-config';
import { type BreakpointsMap } from '../models/breakpoints';

const memoizedMakeBreakpoints: (UserConfig) => BreakpointsMap = memoizeone(
  makeBreakpointsProcess,
);

export const safeMakeBreakpoints: (UserConfig) => * = R.ifElse(
  validateUserConfig,
  R.compose(
    Just,
    memoizedMakeBreakpoints,
  ),
  Nothing,
);
