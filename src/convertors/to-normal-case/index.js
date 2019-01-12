// @flow

type ToNormalCase = (string) => string;
export const toNormalCase: ToNormalCase = (x) =>
  x.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
