import * as R from 'ramda';

import { toPxIfHasEm } from '../convertors/to-px-if-has-em';
import { regexes } from '../constants';

// makeStepFromLiteral :: String -> Number
export const makeStepFromLiteral = R.compose(
  parseFloat,
  R.match(regexes.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING),
);

// makeFontSizeFromLiteral :: String -> Number
export const makeFontSizeFromLiteral = R.compose(
  parseFloat,
  R.map(toPxIfHasEm),
  R.match(regexes.FONT_SIZE),
);

// calcRatio :: (String, [Number]) -> Number
export const calcRatio = (ratio, base) =>
  (makeFontSizeFromLiteral(ratio) / base[0]) **
  (1 / makeStepFromLiteral(ratio));

export type Input = {
  base: number[],
  lineHeight: number,
  name: string,
  ratio: number | string,
  value: string,
};

// calcRatioProcess :: [Object] -> [Object]
export const calcRatioProcess = ({ base, ratio, ...item }) => ({
  ...item,
  base,
  ratio: typeof ratio === 'string' ? calcRatio(ratio, base) : ratio,
});
