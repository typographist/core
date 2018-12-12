// @flow

import R from 'ramda';

type Breakpoint = {
  base: string | string[],
  lineHeight: number,
  name: string,
  ratio: number | string,
  value: string,
};

type MakeDefaultBreak = any => Breakpoint[];

export const makeDefaultBreak: MakeDefaultBreak = R.compose(
  R.of,
  R.merge({ name: 'default', value: '0px' }),
  R.pick(['base', 'lineHeight', 'ratio']),
);
