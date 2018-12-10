import R from 'ramda';
import { DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS } from '../../constants/regexes';

const camelizeString = R.replace(
  DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
  (match, chr) => (chr ? chr.toUpperCase() : ''),
);

// camelize :: String -> String
export const camelize = R.converge(R.concat, [
  R.compose(
    R.toLower,
    R.head,
  ),
  R.compose(
    camelizeString,
    R.tail,
  ),
]);
