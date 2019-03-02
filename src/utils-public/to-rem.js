export const toRem = (root: number, fontSize: number | number[]) =>
  `${parseFloat(fontSize) / root}rem`;
