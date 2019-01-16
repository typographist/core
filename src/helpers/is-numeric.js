// @flow

export const isNumeric = (x: mixed) =>
  !Number.isNaN(parseFloat(x)) && isFinite(x);
