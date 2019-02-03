// @flow

import { toPxIfHasEm } from '../convertors/to-px-if-has-em';
import { type NotFilledRenamedBreak } from '../models';

export const toPxBreakValue: (NotFilledRenamedBreak) => NotFilledRenamedBreak = ({
  value,
  ...item
}) => ({
  ...item,
  value: toPxIfHasEm(value),
});
