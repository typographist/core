import R from 'ramda';
import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT } from '../../constants/regexes';

// toEm :: String -> String
const toEm = x => `${parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE}em`;

// toEmIfHasPx :: String -> String
export const toEmIfHasPx = R.when(
  R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT),
  toEm,
);
