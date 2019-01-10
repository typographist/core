// @flow

import { type Breakpoint } from '../../models';

type ToRem = (number | number[], Breakpoint) => string;
export const toRem: ToRem = (fontSize, { root }) =>
  `${parseFloat(fontSize) / root}rem`;
