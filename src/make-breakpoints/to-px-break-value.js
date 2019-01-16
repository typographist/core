// @flow

import { toPxIfHasEm } from '../convertors/to-px-if-has-em';

type Input = {|
  base: string | string[],
  lineHeight: number,
  name: string,
  ratio: string | number,
  value: string,
|};

export const toPxBreakValue = ({ value, ...item }: Input): * => ({
  ...item,
  value: toPxIfHasEm(value),
});
