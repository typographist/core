// @flow
import { makeBreakpointsProcess } from './make-breakpoints-process';
import { validateUserConfig } from '../validate-user-config';
import type { UserConfig } from '../models';

export const makeBreakpoints = (config: UserConfig) =>
  validateUserConfig(config) ? makeBreakpointsProcess(config) : [];
