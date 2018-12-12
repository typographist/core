// @flow

import R from 'ramda';

type Input = {
  value: string,
  name: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
};

type Output = {
  value: string,
  name: string,
  base: string | string[],
  lineHeight: number,
  ratio: number | string,
};

const inherit = (acc, item, index) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];

export const inheritProps: (Input[]) => Output[] = input =>
  input.reduce(inherit, []);
