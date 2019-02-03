// @flow

import type { NotFilledRenamedBreak, FillledBreak } from '../models';

export const inheritProps = (
  acc: FillledBreak[],
  item: NotFilledRenamedBreak,
  index: number,
) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];

export const inheritPropsProcess: (
  $ReadOnlyArray<NotFilledRenamedBreak>,
) => FillledBreak[] = (breaks) => breaks.reduce(inheritProps, []);
