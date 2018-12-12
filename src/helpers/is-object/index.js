//  @flow

type IsObject = any => boolean;
export const isObject: IsObject = val =>
  Object.prototype.toString.call(val).slice(8, -1) === 'Object';
