// @flow

import R from 'ramda';
import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT } from '../../constants/regexes';

type ToEm = string => string;
const toEm: ToEm = x => `${parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE}em`;

type ToEmIfHasPx = string => string;
export const toEmIfHasPx: ToEmIfHasPx = R.when(
  R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT),
  toEm,
);
