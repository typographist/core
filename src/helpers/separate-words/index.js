import R from 'ramda';
import { SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER } from '../../constants/regexes';

// separateWords :: String => String -> String
export const separateWords = (separator = '') =>
  R.compose(
    R.join(separator),
    R.split(SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER),
  );

// toCebabCase :: String => String
export const toCebabCase = separateWords('-');

// toSnakeCase :: String => String
export const toSnakeCase = separateWords('_');
