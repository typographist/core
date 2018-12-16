// @flow

export const isNumeric: mixed => boolean = x =>
  !Number.isNaN(parseFloat(x)) && isFinite(x);
