// @flow

import R from 'ramda';
import { toPxIfHasEm } from '../../convertos/to-px-if-has-em';
import { FONT_SIZE } from '../../constants/regexes';

type GetFontSize = string => number;
export const getFontSize: GetFontSize = R.compose(
  parseFloat,
  R.map(toPxIfHasEm),
  R.match(FONT_SIZE),
);
