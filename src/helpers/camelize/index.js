import R from 'ramda';
import { DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS } from '../../constants/regexes';

const camelizeString = R.replace(
  DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
  (match, chr) => (chr ? chr.toUpperCase() : ''),
);

// concatString :: String -> String
const concatString = R.reduce((acc, item) => acc + item, '');

// camelize :: String -> String
export const camelize = R.compose(
  concatString,
  R.juxt([
    R.compose(
      R.toLower,
      R.head,
    ),
    R.compose(
      camelizeString,
      R.tail,
    ),
  ]),
);
