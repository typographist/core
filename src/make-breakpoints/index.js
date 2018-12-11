import R from 'ramda';
import { isValidUserConfig } from '../is-valid-user-config';
import { makeBreakpointsFlow } from './make-breakpoints-flow';

export const makeBreakpoints = R.when(isValidUserConfig, makeBreakpointsFlow);
