import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT } from '../../constants/regexes';
import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

// toPxProcess :: String -> String
const toPxProcess = R.compose(
  R.concat(R.__, 'px'),
  String,
  R.multiply(R.__, BROWSER_DEFAULT_FONT_SIZE),
  parseFloat,
);

// toPx :: String -> String
export const toPx = R.when(
  R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT),
  toPxProcess,
);
