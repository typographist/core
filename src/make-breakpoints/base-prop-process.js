// @flow

import * as R from 'ramda';
import { toArrIsNotArr, toPxIfHasEm } from '../convertors';

type Input = {|
  base: string | string[],
  lineHeight: number,
  name: string,
  ratio: string | number,
  value: string,
|};

type Output = {|
  base: number[],
  lineHeight: number,
  name: string,
  ratio: string | number,
  value: string,
|};

export const basePropProcess = ({ base, ...item }: Input): Output => ({
  ...item,
  base: R.compose(
    R.map(
      R.compose(
        parseFloat,
        toPxIfHasEm,
      ),
    ),
    toArrIsNotArr,
  )(base),
});
