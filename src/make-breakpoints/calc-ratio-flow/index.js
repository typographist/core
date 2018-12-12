// @flow

import R from 'ramda';
import { calcRatio } from '../../calculators/calc-ratio';

type Input = {
  base: number | number[],
  lineHeight: number,
  name: string,
  ratio: number | string,
  value: string,
};

type Output = {
  base: number | number[],
  lineHeight: number,
  name: string,
  ratio: number,
  value: string,
};

type CalcRatioFlow = Input => Output;
export const calcRatioFlow: CalcRatioFlow = item =>
  R.merge(item, {
    ratio:
      typeof item.ratio === 'string'
        ? calcRatio(item.ratio, item.base)
        : item.ratio,
  });
