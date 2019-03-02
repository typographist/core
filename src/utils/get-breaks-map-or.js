import type { UserConfig } from '@models';
import * as R from 'ramda';
import { DEFAULT_BREAK_MAP } from '@constants';
import { makeBreakpointsMap } from '@make-breakpoints-map';

export const getBreaksMapOr: (UserConfig) => * = R.compose(
  R.defaultTo(DEFAULT_BREAK_MAP),
  makeBreakpointsMap,
);
