// @flow

import * as R from 'ramda';
import * as constants from '../../constants';

type ToEm = (string) => string;
const toEm: ToEm = (x) =>
  `${parseFloat(x) / constants.BROWSER_DEFAULT_FONT_SIZE}em`;

type ToEmIfHasPx = (string) => string;
export const toEmIfHasPx: ToEmIfHasPx = R.when(
  R.test(constants.PX_FONT_SIZE),
  toEm,
);
