import R from 'ramda';
import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT } from '../../constants/regexes';

// toEmProcess :: String -> String
const toEmProcess = R.compose(
  R.concat(R.__, 'em'),
  String,
  R.divide(R.__, BROWSER_DEFAULT_FONT_SIZE),
  parseFloat,
);

// toEm :: String -> String
export const toEm = R.when(
  R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT),
  toEmProcess,
);
