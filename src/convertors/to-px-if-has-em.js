// @flow

import * as R from 'ramda';
import { BROWSER_DEFAULT_FONT_SIZE, regexes } from '../constants';

const toPx = (x: string) => `${parseFloat(x) * BROWSER_DEFAULT_FONT_SIZE}px`;

export const toPxIfHasEm: (string) => string = R.when(
  R.test(regexes.VAL_IN_EM),
  toPx,
);
