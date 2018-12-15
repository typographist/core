// @flow

import R from 'ramda';

import { toPxIfHasEm } from '../convertors/to-px-if-has-em';
import * as regexp from '../constants/regexes';

type MakeStepFromLiteral = string => number;
export const makeStepFromLiteral: MakeStepFromLiteral = R.compose(
  parseFloat,
  R.match(
    regexp.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
  ),
);

type MakeFontSizeFromLiteral = string => number;
export const makeFontSizeFromLiteral: MakeFontSizeFromLiteral = R.compose(
  parseFloat,
  R.map(toPxIfHasEm),
  R.match(regexp.FONT_SIZE),
);

type CalcRatio = (string, number[]) => number;
export const calcRatio: CalcRatio = (ratio, base) =>
  (makeFontSizeFromLiteral(ratio) / base[0]) **
  (1 / makeStepFromLiteral(ratio));

type Input = {
  base: number[],
  lineHeight: number,
  name: string,
  ratio: number | string,
  value: string,
};

export const calcRatioProcess: Input => * = ({ base, ratio, ...item }) => ({
  ...item,
  base,
  ratio: typeof ratio === 'string' ? calcRatio(ratio, base) : ratio,
});
