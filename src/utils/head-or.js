// @flow

import type { Breakpoint } from '@models';
import * as R from 'ramda';
import { DEFAULT_BREAK } from '@constants';

export const headOr: (Breakpoint[]) => Breakpoint = R.compose(
  R.defaultTo(DEFAULT_BREAK),
  R.head,
);
