//  from https://github.com/modularscale/modularscale.com/blob/master/source/javascripts/_ms.js.erb#L27-L52

const calcStartPosition = (step, base) =>
  Math.round(
    (step / base.length - Math.floor(step / base.length)) * base.length,
  );

const calcFontSize = (step, base, ratio) =>
  Math.pow(ratio, Math.floor(step / base.length));

/* eslint-disable */
export const modularScale = (step, base, ratio) => {
  const startPosition = calcStartPosition(step, base);
  const fontSize = calcFontSize(step, base, ratio);
  const baseHigh = Math.pow(ratio, 1) * base[0];

  if (!Array.isArray(base) || base.length === 1) {
    return Math.pow(ratio, step) * base;
  }

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
