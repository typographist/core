// @flow
import type { NotFilledBreakpoint, FilledBreakpoint } from '../models';

type InheritProps = (
  FilledBreakpoint[],
  NotFilledBreakpoint,
  number,
) => FilledBreakpoint[];

export const inheritProps: InheritProps = (acc, item, index) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];
