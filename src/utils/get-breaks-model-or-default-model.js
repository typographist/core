import * as R from 'ramda';
import type { UserConfig } from '../models';
import { DEFAULT_BREAK_MAP } from '../constants';
import { makeBreakpointsModel } from '../make-breakpoints-model';

export const getBreaksModelOrDefaultModel: (UserConfig) => * = R.compose(
  R.defaultTo(DEFAULT_BREAK_MAP),
  makeBreakpointsModel,
);
