// @flow

import R from 'ramda';
import type { UserConfig } from '../../models';

type Breakpoint = {
  base: string | string[],
  lineHeight: number,
  ratio: number | string,
  name: string,
  value: string,
};

type MakeDefaultBreak = UserConfig => Breakpoint[];

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
