// @flow

type CalcLeading = (number[], number) => number;
export const calcLeading: CalcLeading = (base, lineHeight) =>
  Math.round(base[0] * lineHeight);
