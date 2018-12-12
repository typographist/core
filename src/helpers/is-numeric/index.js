// @flow

type IsNumeric = (num: any) => boolean;
export const isNumeric: IsNumeric = x =>
  !Number.isNaN(parseFloat(x)) && isFinite(x);
