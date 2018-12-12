// @flow

import R from 'ramda';
import { isValiduserConfig } from '../is-valid-user-config';
import { makeBreakpointsFlow } from './make-breakpoints-flow';
import type { Breakpoint } from './make-breakpoints-flow';

type MakeBreakpoints = any => Breakpoint[];
export const makeBreakpoints: MakeBreakpoints = R.when(
  isValiduserConfig,
  makeBreakpointsFlow,
);
