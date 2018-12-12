// @flow

import R from 'ramda';

type Input = {
  base: string | string[],
  lineHeight: number,
  ratio: number | string,
};

type Breakpoint = {
  ...Input,
  name: string,
  value: string,
};

type MakeDefaultBreak = Input => Breakpoint[];

export const makeDefaultBreak: MakeDefaultBreak = R.compose(
  Array.of,
  ({ base, lineHeight, ratio }) => ({
    base,
    lineHeight,
    ratio,
    name: 'default',
    value: '0px',
  }),
);
