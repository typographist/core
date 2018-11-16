// calcFontSize :: (Number, Number, Number) => Number
export const calcFontSize = (step, base, ratio) => {
  if (!Array.isArray(base) || base.length === 1) {
    return Math.round(ratio ** step * base);
  }

  const cloneBase = base.slice();
  const baseHigh = ratio ** 1 * cloneBase[0];

  for (let i = 1; i < cloneBase.length; i + 1) {
    while (cloneBase[i] / 1 < cloneBase[0] / 1) {
      cloneBase[i] *= ratio ** 1;
    }
    while (cloneBase[i] / 1 >= baseHigh / 1) {
      cloneBase[i] *= ratio ** -1;
    }
  }

  cloneBase.sort();
  const roundedBase = Math.round(
    (step / cloneBase.length - Math.floor(step / cloneBase.length)) *
      cloneBase.length,
  );

  return Math.round(
    ratio ** Math.floor(step / cloneBase.length) * cloneBase[roundedBase],
  );
};
