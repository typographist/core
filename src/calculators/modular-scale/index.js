// @flow

//  from https://github.com/modularscale/modularscale.com/blob/master/source/javascripts/_ms.js.erb#L27-L52

type CalcStartPosition = (number, number[]) => number;
const calcStartPosition: CalcStartPosition = (step, base) =>
  Math.round(
    (step / base.length - Math.floor(step / base.length)) * base.length,
  );

type CalcFontSize = (number, number[], number) => number;
const calcFontSize: CalcFontSize = (step, base, ratio) =>
  Math.pow(ratio, Math.floor(step / base.length));

/* eslint-disable */

type ModularScale = (number[], number, number) => number;
export const modularScale: ModularScale = (base, ratio, step) => {
  if (base.length === 1) {
    return Math.pow(ratio, step) * parseFloat(base);
  }

  const startPosition = calcStartPosition(step, base);
  const fontSize = calcFontSize(step, base, ratio);
  const baseHigh = Math.pow(ratio, 1) * base[0];

  // Normalize bases
  // Find the upper bounds for base values

  for (let i = 1; i < base.length; i++) {
    // shift up if value too low
    while (base[i] / 1 < base[0] / 1) {
      base[i] = Math.pow(ratio, 1) * base[i];
    }
    // Shift down if too high
    while (base[i] / 1 >= baseHigh / 1) {
      base[i] = Math.pow(ratio, -1) * base[i];
    }
  }

  // Return
  return fontSize * base.sort()[startPosition];
};
/* eslint-enable */
