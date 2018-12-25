// @flow

import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

export const percentage: (number | string) => string = x =>
  `${(parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE) * 100}%`;
