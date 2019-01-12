// @flow

import * as R from 'ramda';
import { toPxIfHasEm } from '../convertors/to-px-if-has-em';

type BaseToArray = (string | string[]) => string[];
export const baseToArray: BaseToArray = (value) =>
  Array.isArray(value) ? value : Array.of(value);

export const toPxBase: (string[]) => string[] = (base) => base.map(toPxIfHasEm);

export const stripBase: (string[]) => number[] = (x) => x.map(parseFloat);

type Input = {|
  base: string | string[],
  lineHeight: number,
  name: string,
  ratio: string | number,
  value: string,
|};

export const basePropProcess: (Input) => * = ({ base, ...item }) => ({
  ...item,
  base: R.compose(
    stripBase,
    toPxBase,
    baseToArray,
  )(base),
});
