// @flow

type CalcLeading = (number[] | number, number) => number;
export const calcLeading: CalcLeading = (base, lineHeight) =>
  Array.isArray(base)
    ? Math.round(base[0] * lineHeight)
    : Math.round(base * lineHeight);
