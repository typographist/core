import * as R from 'ramda';
import { toArrIsNotArr } from '../convertors/to-arr-is-not-arr';
import { toPxIfHasEm } from '../convertors/to-px-if-has-em';

// basePropProcess :: Object -> Object
export const basePropProcess = ({ base, ...item }) => ({
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
