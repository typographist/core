// @flow
import memoizeOne from 'memoize-one';

//  https://www.modularscale.com/

import { type Breakpoint } from '../models';

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

const calcResult = (fontSize, bases, position) => fontSize * bases[position];

const calcBaseHigh = (ratio, base) => Math.pow(ratio, 1) * base[0];

export const dumpModularScale: (
  number,
  { root?: number, ...Breakpoint },
) => number = (step, { base, ratio }) => {
  if (base.length === 1) {
    return Math.pow(ratio, step) * parseFloat(base);
  }

  const startPosition = calcStartPosition(step, base);
  const fontSize = calcFontSize(step, base, ratio);
  const baseHigh = calcBaseHigh(ratio, base);
  const normalizedBases = normalizeBases(base, baseHigh, ratio);

  return calcResult(fontSize, normalizedBases, startPosition);
};

export const modularScale = memoizeOne(dumpModularScale);
