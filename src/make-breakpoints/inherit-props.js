// @flow

import type {
  NotFilledBreakpoint,
  FilledBreakpoint,
} from '../models/breakpoints';

export const inheritProps = (
  acc: FilledBreakpoint[],
  item: NotFilledBreakpoint,
  index: number,
) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];
