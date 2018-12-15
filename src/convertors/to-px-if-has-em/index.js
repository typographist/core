// @flow

import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT } from '../../constants/regexes';
import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

const toPx: string => string = x =>
  `${parseFloat(x) * BROWSER_DEFAULT_FONT_SIZE}px`;

export const toPxIfHasEm: string => string = R.when(
  R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT),
  toPx,
);
