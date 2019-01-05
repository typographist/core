// @flow

type ToRem = (number, number | number[]) => string;
export const toRem: ToRem = (root, fontSize) =>
  `${parseFloat(fontSize) / root}rem`;
