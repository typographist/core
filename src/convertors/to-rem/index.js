// @flow

type ToRem = (number, number) => string;
export const toRem: ToRem = (root, fontSize) => `${fontSize / root}rem`;
