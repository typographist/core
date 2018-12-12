// @flow

export const ALL_CHARACTERS_AFTER_COLON: RegExp = /:.+\b/;
export const ALL_CHARACTERS_BEFORE_COLON: RegExp = /^\(.+\):?/;
export const ALL_ROUND_BRACKETS: RegExp = /[()]/g;
export const AMPERSAND: RegExp = /&/;
export const SPACE_AT_WORD_SPACE: RegExp = /\sat\s/;
export const DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS: RegExp = /[-_\s]+(.)?/g;
export const FIRST_BREAKPOINT: RegExp = /^0/;
export const FONT_SIZE: RegExp = /\b\d+(\.\d+)?(px|em)\b/g;
export const FONT_SIZE_WORD: RegExp = /^font-size$/;
export const INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT: RegExp = /\d+(\.\d+)?em/;
export const LAST_COMMA: RegExp = /,\s*$/;
export const LINE_BREAKS_AND_SPACES: RegExp = /[\n\s]/g;
export const POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING: RegExp = /^\d+(\.\d+)?(px|em)\b/g;
export const POSITIVE_FLOATING_POINT_NUMBER_WITH_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING: RegExp = /^\d+(\.\d+)?em\b/g;
export const POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_BEGINNING_OF_THE_STRING: RegExp = /^-?\d+(\.\d+)?$/;
export const POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING: RegExp = /-?\b\d+(\.\d+)?\b\s*$/g;
export const INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT: RegExp = /\d+(\.\d+)?(px|em)/;
export const INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT: RegExp = /\d+(\.\d+)?px/;
export const INTEGER_OR_FLOATING_POINT_NUMBER_WITH_REM_UNIT: RegExp = /\d+(\.\d+)?rem/;
export const POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_WITH_STEP_WORD_AT_THE_BEGINNING_OF_THE_STRING: RegExp = /^-?\d+(\.\d+)?step$/;
export const REVERCE_BRACKET: RegExp = /\)/;
export const SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER: RegExp = /(?=[A-Z])/;
export const STEP_WORD: RegExp = /step/;
export const TSTEP_FUNCTION_WITH_VALUE: RegExp = /^t-step\(.+?\)$/;
export const T_STEP_WITH_BRACKET: RegExp = /t-step\(/;
