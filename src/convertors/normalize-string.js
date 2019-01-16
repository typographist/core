// @flow

export const normalizeString = (x: string) =>
  x.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
