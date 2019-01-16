// @flow

import { regexes } from '../constants';

type SeparateWords = (separator?: string) => (string) => *;
export const separateWords: SeparateWords = (separator = ' ') => (str) =>
  str
    .split(regexes.SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER)
    .join(separator)
    .toLowerCase();
