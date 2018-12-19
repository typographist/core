// @flow
import memoize from 'fast-memoize';
import { makeBreakpointsProcess } from './make-breakpoints-process';
import { validateUserConfig } from '../validate-user-config';
import { type UserConfig } from '../models';

const memoized = memoize(makeBreakpointsProcess);

export const makeBreakpoints = (config: UserConfig) =>
  validateUserConfig(config) ? memoized(config) : [];
