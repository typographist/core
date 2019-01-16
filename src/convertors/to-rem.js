// @flow

import { type Breakpoint } from '../models/breakpoints';

export const toRem = (fontSize: number | number[], { root }: Breakpoint) =>
  `${parseFloat(fontSize) / root}rem`;
