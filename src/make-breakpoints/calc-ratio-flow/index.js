// @flow

import { calcRatio } from '../../calculators/calc-ratio';

type Input = {
  base: number[],
  lineHeight: number,
  name: string,
  ratio: number | string,
  value: string,
};

type Output = {
  base: number[],
  lineHeight: number,
  name: string,
  ratio: number,
  value: string,
};

type CalcRatioFlow = Input => Output;
export const calcRatioFlow: CalcRatioFlow = ({ base, ratio, ...item }) => ({
  ...item,
  base,
  ratio: typeof ratio === 'string' ? calcRatio(ratio, base) : ratio,
});
