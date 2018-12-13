// @flow

import { calcRoot } from '../../calculators/calc-root';
import { calcLeading } from '../../calculators/calc-leading';

type Input = {
  base: number[],
  lineHeight: number,
  name: string,
  ratio: number,
  value: string,
};

type Output = {
  base: number[],
  lineHeight: number,
  name: string,
  ratio: number,
  value: string,
  root: number,
};

type SetPropRoot = Input => Output;
export const setPropRoot: SetPropRoot = item => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});
