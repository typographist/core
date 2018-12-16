// @flow

export const determineType: mixed => string = val =>
  Object.prototype.toString.call(val).slice(8, -1);
