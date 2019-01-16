// @flow

import * as R from 'ramda';

import { toPxIfHasEm } from '../convertors/to-px-if-has-em';
import { regexes } from '../constants';

export const makeStepFromLiteral: (string) => number = R.compose(
  parseFloat,
  R.match(regexes.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING),
);

export const makeFontSizeFromLiteral: (string) => number = R.compose(
  parseFloat,
  R.map(toPxIfHasEm),
  R.match(regexes.FONT_SIZE),
);

export const calcRatio = (ratio: string, base: number[]) =>
  (makeFontSizeFromLiteral(ratio) / base[0]) **
  (1 / makeStepFromLiteral(ratio));

export type Input = {
  base: number[],
  lineHeight: number,
  name: string,
  ratio: number | string,
  value: string,
};

export const calcRatioProcess = ({ base, ratio, ...item }: Input) => ({
  ...item,
  base,
  ratio: typeof ratio === 'string' ? calcRatio(ratio, base) : ratio,
});
