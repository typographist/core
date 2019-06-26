import { invariantWithPrefix } from '../lib';

export const DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS = /[-_\s]+(.)?/g;
export const SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER = /(?=[A-Z])/;

export const invariant = invariantWithPrefix(
  '[typographist]: Check your config.',
);
