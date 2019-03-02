// @flow

import { toPxIfHasEm } from '@convertors/to-px';
import { type NotFilledRenamedBreak } from '../models';

export const toPxBreakValue: (NotFilledRenamedBreak) => NotFilledRenamedBreak = ({
  value,
  ...item
}) => ({
  ...item,
  value: toPxIfHasEm(value),
});
