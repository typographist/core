// @flow

import * as R from 'ramda';
import { toArrIsNotArr } from '../convertors/to-arr-is-not-arr';
import { toPxIfHasEm } from '../convertors/to-px-if-has-em';

// type Input = {|
//   base: string | string[],
//   lineHeight: number,
//   name: string,
//   ratio: string | number,
//   value: string,
// |};

// type Output = {|
//   base: number[],
//   lineHeight: number,
//   name: string,
//   ratio: string | number,
//   value: string,
// |};

export const basePropProcess = ({ base, ...item }: *): * => ({
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
