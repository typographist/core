// @flow

import { toPxIfHasEm } from '../../convertos/to-px-if-has-em';

type Input = {
  base: string[],
};

type Output = {
  base: string[],
};

type ToPxBase = Input => Output;
export const toPxBase: ToPxBase = item => {
  const { base } = item;

  return {
    ...item,
    base: base.map(toPxIfHasEm),
  };
};
