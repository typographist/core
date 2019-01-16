//  @flow

export const isObject = (val: mixed) =>
  Object.prototype.toString.call(val).slice(8, -1) === 'Object';
