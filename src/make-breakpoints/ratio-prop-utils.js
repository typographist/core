// @flow

import * as R from 'ramda';

import { toPxIfHasEm } from '../convertors/to-px-if-has-em';
import * as constants from '../constants';

type MakeStepFromLiteral = string => number;
export const makeStepFromLiteral: MakeStepFromLiteral = R.compose(
  parseFloat,
  R.match(
    constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_END_OF_STRING,
  ),
);

type MakeFontSizeFromLiteral = string => number;
export const makeFontSizeFromLiteral: MakeFontSizeFromLiteral = R.compose(
  parseFloat,
  R.map(toPxIfHasEm),
  R.match(constants.FONT_SIZE),
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
