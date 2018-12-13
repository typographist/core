// @flow

import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT } from '../../constants/regexes';
import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

type ToPx = string => string;
const toPx: ToPx = x => `${parseFloat(x) * BROWSER_DEFAULT_FONT_SIZE}px`;

type ToPxIfHasEm = string => string;
export const toPxIfHasEm: ToPxIfHasEm = R.when(
  R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT),
  toPx,
);
