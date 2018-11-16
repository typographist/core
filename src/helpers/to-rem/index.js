import { getBase } from '../get-base';

// toRem :: (Number, Number) => String
export const toRem = (baseSize, rootSize) =>
  `${getBase(baseSize) / rootSize}rem`;
