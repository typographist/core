// @flow

import * as R from 'ramda';
import * as constants from '../../constants';

const toPx: (string) => string = (x) =>
  `${parseFloat(x) * constants.BROWSER_DEFAULT_FONT_SIZE}px`;

export const toPxIfHasEm: (string) => string = R.when(
  R.test(constants.EM_FONT_SIZE),
  toPx,
);
