// @flow

export const typeOf: mixed => string = val =>
  Object.prototype.toString.call(val).slice(8, -1);
