import {
  SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER,
  DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
} from '../constants';

// getFirstLetter :: String -> String
export const getFirstLetter = (word) => word[0].toLowerCase();

// getWordTail :: String -> String
export const getWordTail = (word) =>
  word
    .slice(1)
    .replace(DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS, (match, chr) =>
      chr.toUpperCase(),
    );

// camelize :: String -> String
export const camelize = (str) => `${getFirstLetter(str)}${getWordTail(str)}`;

// normalizeString :: String -> String
export const normalizeString = (x) =>
  x.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

// separateWords :: (Maybe String) -> String -> String
export const separateWords = (separator = ' ') => (str) =>
  str
    .split(SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER)
    .join(separator)
    .toLowerCase();

// toKebabCase :: String -> String
export const toKebabCase = separateWords('-');

// toSnakeCase :: String -> String
export const toSnakeCase = separateWords('_');
