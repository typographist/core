import memoizeOne from 'memoize-one';

//  https://www.modularscale.com/

// calcStartPosition :: (Number, [Number]) -> [Number]
export const calcStartPosition = (step, base) =>
  Math.round(
    (step / base.length - Math.floor(step / base.length)) * base.length,
  );

// calcFontSize :: (Number, [Number], Number) -> Number
export const calcFontSize = (step, base, ratio) =>
  Math.pow(ratio, Math.floor(step / base.length));

/* eslint-disable no-param-reassign, no-plusplus */

// normalizeBases :: ([Number], Number, Number) -> Number
export const normalizeBases = (base, baseHigh, ratio) => {
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

// calcResult :: (Number, [Number], Number) -> Number
export const calcResult = (fontSize, bases, position) =>
  fontSize * bases[position];

// calcBaseHigh :: (Number, [Number]) -> Number
export const calcBaseHigh = (ratio, base) => Math.pow(ratio, 1) * base[0];

// dumpModularScale :: (Number, [Number], Number) -> Number
export const dumpModularScale = (step, base, ratio) => {
  if (base.length !== 1) {
    const startPosition = calcStartPosition(step, base);
    const fontSize = calcFontSize(step, base, ratio);
    const baseHigh = calcBaseHigh(ratio, base);
    const normalizedBases = normalizeBases(base, baseHigh, ratio);

    return calcResult(fontSize, normalizedBases, startPosition);
  }

  return Math.round(Math.pow(ratio, step) * parseFloat(base));
};

// modularScale :: (Number, [Number], Number) -> Number
export const modularScale = memoizeOne(dumpModularScale);
