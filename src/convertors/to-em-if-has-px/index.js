// @flow

import R from 'ramda';
import * as constants from '../../constants';

type ToEm = string => string;
const toEm: ToEm = x =>
  `${parseFloat(x) / constants.BROWSER_DEFAULT_FONT_SIZE}em`;

type ToEmIfHasPx = string => string;
export const toEmIfHasPx: ToEmIfHasPx = R.when(
  R.test(constants.INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT),
  toEm,
);
