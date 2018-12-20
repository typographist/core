// @flow

import * as constants from '../../constants';

type SeparateWords = (separator?: string) => string => string;
export const separateWords: SeparateWords = (separator = ' ') => str =>
  str
    .split(constants.SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER)
    .join(separator)
    .toLowerCase();
