//  @flow

export const isObject: (mixed) => boolean = (val) =>
  Object.prototype.toString.call(val).slice(8, -1) === 'Object';
