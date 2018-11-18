import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT } from '../../constants/regexes';
import { toPx } from '../to-px';

//  hasEms :: String -> Boolean
const hasEms = R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT);

// baseToPx :: String -> String
const baseToPx = R.ifElse(
  hasEms,
  R.compose(
    parseFloat,
    toPx,
  ),
  parseFloat,
);

// stripBase :: (Array[String] | String) => Array[Number] | Number
export const stripBase = R.cond([
  [R.is(String), baseToPx],
  [R.is(Array), R.map(str => stripBase(str))],
]);
