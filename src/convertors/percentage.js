// @flow

import { BROWSER_DEFAULT_FONT_SIZE } from '../constants';

export const percentage = (x: number | string | number[]) =>
  `${(parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE) * 100}%`;
