// @flow

import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

type Percentage = (number | string) => number;
export const percentage: Percentage = x =>
  (parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE) * 100;
