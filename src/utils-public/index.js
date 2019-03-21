const {
  SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER,
  DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
} = require('../constants');
const { modularScale } = require('./modular-scale');

// firstLetter :: String -> String
const firstLetter = (word) => word[0].toLowerCase();

// wordTail :: String -> String
const wordTail = (word) =>
  word
    .slice(1)
    .replace(DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS, (match, chr) =>
      chr.toUpperCase(),
    );

// camelize :: String -> String
const camelize = (str) => `${firstLetter(str)}${wordTail(str)}`;

// normalizeString :: String -> String
const normalizeString = (x) =>
  x.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

// separateWords :: (?String = '') -> String -> String
const separateWords = (separator = ' ') => (str) =>
  str
    .split(SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER)
    .join(separator)
    .toLowerCase();

// toCebabCase :: String -> String
const toCebabCase = separateWords('-');

// toRem :: (Number, Number | [Number]) -> String
const toRem = (root, fontSize) => `${parseFloat(fontSize) / root}rem`;

// toSnakeCase :: String -> String
const toSnakeCase = separateWords('_');

module.exports = {
  firstLetter,
  wordTail,
  camelize,
  modularScale,
  normalizeString,
  separateWords,
  toCebabCase,
  toRem,
  toSnakeCase,
};
