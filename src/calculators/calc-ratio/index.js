import R from 'ramda';
import { toPx } from '../../convertos/to-px';
import {
  FONT_SIZE,
  POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
} from '../../constants/regexes';

// getFontSize :: String -> Number
export const getFontSize = R.compose(
  parseFloat,
  toPx,
  R.match(FONT_SIZE),
);

// getStep :: String -> Number
export const getStep = R.compose(
  Number,
  R.match(
    POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
  ),
);

// calcRatio :: Number -> Number -> Number -> -> Number
export const calcRatio = (fontSize, step, base) =>
  (fontSize / base) ** (1 / step);
