// @flow

type IsNumeric = mixed => boolean;
export const isNumeric: IsNumeric = x =>
  !Number.isNaN(parseFloat(x)) && isFinite(x);
