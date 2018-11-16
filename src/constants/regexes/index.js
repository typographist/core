export const ALL_CHARACTERS_AFTER_COLON = /:.+\b/;
export const ALL_CHARACTERS_BEFORE_COLON = /^\(.+\):?/;
export const ALL_ROUND_BRACKETS = /[()]/g;
export const AMPERSAND = /&/;
export const SPACE_AT_WORD_SPACE = /\sat\s/;
export const DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS = /[-_\s]+(.)?/g;
export const FIRST_BREAKPOINT = /^0/;
export const FONT_SIZE = /\b-?\d+(\.\d+)?(px|em)\b/g;
export const FONT_SIZE_WORD = /^font-size$/;
export const INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT = /\d+(\.\d+)?em/;
export const LAST_COMMA = /,\s*$/;
export const LINE_BREAKS_AND_SPACES = /[\n\s]/g;
export const POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING = /^\d+(\.\d+)?(px|em)\b/g;
export const POSITIVE_FLOATING_POINT_NUMBER_WITH_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING = /^\d+(\.\d+)?em\b/g;
export const POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING = /^-?\d+(\.\d+)?$/;
export const POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING = /-?\b\d+(\.\d+)?\b\s*$/g;
export const INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT = /\d+(\.\d+)?(px|em)/;
export const INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT = /\d+(\.\d+)?px/;
export const INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT = /\d+(\.\d+)?rem/;
export const POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_WITH_STEP_WORD_AT_THE_BEGINNING_OF_THE_STRING = /^-?\d+(\.\d+)?step$/;
export const REVERCE_BRACKET = /\)/;
export const SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER = /(?=[A-Z])/;
export const STEP_WORD = /step/;
export const TSTEP_FUNCTION_WITH_VALUE = /^t-step\(.+?\)$/;
export const T_STEP_WITH_BRACKET = /t-step\(/;
export const COMMA_AND_NEW_LINE = ',\n';
