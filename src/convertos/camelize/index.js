// @flow

import R from 'ramda';
import { DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS } from '../../constants/regexes';

type CamelizeString = string => string;
const camelizeString: CamelizeString = R.replace(
  DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
  (match, chr) => (chr ? chr.toUpperCase() : ''),
);

type Camelize = string => string;
export const camelize: Camelize = R.converge(R.concat, [
  R.compose(
    R.toLower,
    R.head,
  ),
  R.compose(
    camelizeString,
    R.tail,
  ),
]);
