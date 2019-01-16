// @flow

import * as R from 'ramda';
import { BROWSER_DEFAULT_FONT_SIZE, regexes } from '../constants';

const toEm = (x: string) => `${parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE}em`;

export const toEmIfHasPx: (string) => string = R.when(
  R.test(regexes.PX_FONT_SIZE),
  toEm,
);
