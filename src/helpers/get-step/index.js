// @flow;

import R from 'ramda';
import { POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING } from '../../constants/regexes';

type GetStep = string => number;
export const getStep: GetStep = R.compose(
  parseFloat,
  R.match(
    POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
  ),
);
