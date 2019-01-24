// @flow

//  https://www.modularscale.com/
//  from https://github.com/modularscale/modularscale.com/blob/master/source/javascripts/_ms.js.erb#L27-L52

import type { Breakpoint } from '../models/breakpoints';

const calcStartPosition = (step: number, base: number[]) =>
  Math.round(
    (step / base.length - Math.floor(step / base.length)) * base.length,
  );

const calcFontSize = (step: number, base: number[], ratio: number) =>
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

export const modularScale = (step: number, { base, ratio }: Breakpoint) => {
  if (base.length === 1) {
    return Math.pow(ratio, step) * parseFloat(base);
  }

  const startPosition = calcStartPosition(step, base);
  const fontSize = calcFontSize(step, base, ratio);
  const baseHigh = Math.pow(ratio, 1) * base[0];
  const normalizedBases = normalizeBases(base, baseHigh, ratio);

  // Return
  return fontSize * normalizedBases[startPosition];
};
