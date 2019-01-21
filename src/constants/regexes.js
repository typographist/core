// @flow

export const SPACE_AT_WORD_SPACE = /\sat\s/;
export const POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING = /^-?\d+(\.\d+)?$/;
export const DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS = /[-_\s]+(.)?/g;
export const FONT_SIZE = /\b\d+(\.\d+)?(px|em)\b/g;
export const VAL_IN_PX_OR_EM_AT_BEGINNING_OF_STRING = /^\d+(\.\d+)?(px|em)\b/g;
export const VAL_IN_PX_OR_EM = /\d+(\.\d+)?(px|em)/;
export const VAL_IN_PX = /\d+(\.\d+)?px/;
export const VAL_IN_EM = /\d+(\.\d+)?em/;
export const SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER = /(?=[A-Z])/;
export const POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING = /-?\b\d+(\.\d+)?\b\s*$/g;
export const ALL_CHARACTERS_AFTER_COLON = /:.+\b/; // postcss
export const ALL_CHARACTERS_BEFORE_COLON = /^\(.+\):?/; // postcss
export const ALL_PARENTHESES = /[()]/g; // postcss
export const AMPERSAND = /&/; // postcss
export const LAST_COMMA = /,\s*$/; // postcss
export const LINE_BREAKS_AND_SPACES = /[\n\s]/g; // postcss
export const REM_FONT_SIZE = /\d+(\.\d+)?rem/; // postcss
export const BACKWARD_PARENTHESES = /\)/; // postcss
export const STEP_UNIT = /step/; // postcss
export const STEP_FUNCTION_WITH_VALUE = /^step\(.+?\)$/; // postcss
export const STEP_FONT_SIZE_AT_BEGINNING_OF_STRING = /^-?\d+(\.\d+)?step$/; // postcss
export const FONT_SIZE_PROP = /^font-size$/; // postcss
export const STEP_WITH_BRACKET = /step\(/; // postcss
export const EM_FONT_SIZE_AT_BEGINNING_OF_STRING = /^\d+(\.\d+)?em\b/g; // postcss
