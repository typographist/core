// @flow
import { HALF } from '../../constants';

type CalcRoot = number => number;
export const calcRoot: CalcRoot = x => Math.round(x * HALF);
