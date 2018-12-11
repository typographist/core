// @flow

import R from 'ramda';
import { SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER } from '../../constants/regexes';

type SeparateWords = (separator?: string) => (x: string) => string;

export const separateWords: SeparateWords = (separator = '') =>
  R.compose(
    R.toLower,
    R.join(separator),
    R.split(SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER),
  );
