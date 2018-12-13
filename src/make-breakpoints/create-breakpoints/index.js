// @flow

import R from 'ramda';
import { makeDefaultBreak } from '../make-default-break';
import { makeNamedBreaks } from '../make-named-breaks';

type Breakpoint = {
  name: string,
  value: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
};

type CreateBreakpoints = mixed => Breakpoint[];
export const createBreakpoints: CreateBreakpoints = R.converge(R.concat, [
  makeDefaultBreak,
  makeNamedBreaks,
]);
