// @flow

import { toPxIfHasEm } from '../../convertos/to-px-if-has-em';

type Input = {
  base: string | string[],
};

type Output = {
  base: string | string[],
};

type ToPxBase = Input => Output;
export const toPxBase: ToPxBase = item => {
  const { base } = item;

  return {
    ...item,
    base: Array.isArray(base) ? base.map(toPxIfHasEm) : toPxIfHasEm(base),
  };
};
