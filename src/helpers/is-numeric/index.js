// @flow

export const isNumeric: any => boolean = x =>
  !Number.isNaN(parseFloat(x)) && isFinite(x);
