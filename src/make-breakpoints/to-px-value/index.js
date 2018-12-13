// @flow

import { toPxIfHasEm } from '../../convertos/to-px-if-has-em';

type Input = {
  value: string | string[],
};

type Output = {
  value: string | string[],
};

type ToPxValue = Input => Output;
export const toPxValue: ToPxValue = item => {
  const { value } = item;

  return {
    ...item,
    value: Array.isArray(value) ? value.map(toPxIfHasEm) : toPxIfHasEm(value),
  };
};
