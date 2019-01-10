// @flow

//  https://www.modularscale.com/
//  from https://github.com/modularscale/modularscale.com/blob/master/source/javascripts/_ms.js.erb#L27-L52

import * as R from 'ramda';
import type { Breakpoint } from '../../models';

type CalcStartPosition = (number, number[]) => number;
const calcStartPosition: CalcStartPosition = (step, base) =>
  Math.round(
    (step / base.length - Math.floor(step / base.length)) * base.length,
  );

type CalcFontSize = (number, number[], number) => number;
const calcFontSize: CalcFontSize = (step, base, ratio) =>
  Math.pow(ratio, Math.floor(step / base.length));

/* eslint-disable no-param-reassign, no-plusplus */
const normalizeBases = (base, baseHigh, ratio) => {
  const cloneBase = [...base];
  for (let i = 1; i < cloneBase.length; i++) {
    // shift up if value too low
    while (cloneBase[i] / 1 < cloneBase[0] / 1) {
      cloneBase[i] *= Math.pow(ratio, 1);
    }
    // Shift down if too high
    while (cloneBase[i] / 1 >= baseHigh / 1) {
      cloneBase[i] *= Math.pow(ratio, -1);
    }
  }
  return cloneBase.sort();
};
/* eslint-enable */

type ModularScale = (number) => (Breakpoint) => number;
export const modularScale: ModularScale = (step) => ({ base, ratio }) => {
  if (base.length === 1) {
    return Math.pow(ratio, step) * parseFloat(base);
  }

  const startPosition = calcStartPosition(step, base);
  const fontSize = calcFontSize(step, base, ratio);
  const baseHigh = Math.pow(ratio, 1) * base[0];

  // Return
  return fontSize * normalizeBases(base, baseHigh, ratio)[startPosition];
};
