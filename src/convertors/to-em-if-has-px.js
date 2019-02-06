// @flow

import * as R from 'ramda';
import { BROWSER_DEFAULT_FONT_SIZE, VAL_IN_PX } from '../constants';

const toEm = (x: string) => `${parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE}em`;

export const toEmIfHasPx: (string) => string = R.when(R.test(VAL_IN_PX), toEm);
