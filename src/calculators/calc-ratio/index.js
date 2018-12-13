// @flow

import { getFirstBase } from '../../helpers/get-first-base';
import { getFontSize } from '../../helpers/get-font-size';
import { getStep } from '../../helpers/get-step';

type CalcRatio = (string, number[]) => number;
export const calcRatio: CalcRatio = (ratio, base) =>
  (getFontSize(ratio) / getFirstBase(base)) ** (1 / getStep(ratio));
