// @flow

import { toPxIfHasEm } from '../../convertos/to-px-if-has-em';

type Input = {
  value: string,
};

type Output = {
  value: string,
};

type ToPxValue = Input => Output;
export const toPxValue: ToPxValue = item => {
  const { value } = item;

  return {
    ...item,
    value: toPxIfHasEm(value),
  };
};
