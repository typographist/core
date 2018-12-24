// @flow

export const COMMA_AND_NEW_LINE = ',\n'; // postcss
export const HALF = 0.5;
export const BROWSER_VIEWPORT_WIDTH = '100vw';
export const BROWSER_DEFAULT_FONT_SIZE = 16;

// ratios
export const AUGMENTED_FOURTH = 1.41421;
export const DOUBLE_OCTAVE = 4;
export const GOLDEN_SECTION = 1.618034;
export const MAJOR_ELEVENTH = 2.666666667;
export const MAJOR_SECOND = 1.125;
export const MAJOR_SEVENTH = 1.875;
export const MAJOR_SIXTH = 1.666666667;
export const MAJOR_TENTH = 2.5;
export const MAJOR_THIRD = 1.25;
export const MAJOR_TWELFTH = 3;
export const MINOR_SECOND = 1.066666667;
export const MINOR_SEVENTH = 1.777777778;
export const MINOR_THIRD = 1.2;
export const OCTAVE = 2;
export const PERFECT_FIFTH = 1.5;
export const PERFECT_FOURTH = 1.333333333;
export const PHI = 1.618034;

// regexes
export const SPACE_AT_WORD_SPACE = /\sat\s/;
export const POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_BEGINNING_OF_STRING = /^-?\d+(\.\d+)?$/;
export const DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS = /[-_\s]+(.)?/g;
export const FONT_SIZE = /\b\d+(\.\d+)?(px|em)\b/g;
export const PX_OR_EM_FONT_SIZE_AT_BEGINNING_OF_STRING = /^\d+(\.\d+)?(px|em)\b/g;
export const PX_OR_EM_FONT_SIZE = /\d+(\.\d+)?(px|em)/;
export const PX_FONT_SIZE = /\d+(\.\d+)?px/;
export const SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER = /(?=[A-Z])/;
export const EM_FONT_SIZE = /\d+(\.\d+)?em/;
export const ALL_CHARACTERS_AFTER_COLON = /:.+\b/; // postcss
export const ALL_CHARACTERS_BEFORE_COLON = /^\(.+\):?/; // postcss
export const ALL_ROUND_BRACKETS = /[()]/g; // postcss
export const AMPERSAND = /&/; // postcss
export const LAST_COMMA = /,\s*$/; // postcss
export const LINE_BREAKS_AND_SPACES = /[\n\s]/g; // postcss
export const REM_FONT_SIZE = /\d+(\.\d+)?rem/; // postcss
export const REVERCE_BRACKET = /\)/; // postcss
export const STEP_UNIT = /step/; // postcss
export const STEP_FUNCTION_WITH_VALUE = /^step\(.+?\)$/; // postcss
export const STEP_FONT_SIZE_AT_BEGINNING_OF_STRING = /^-?\d+(\.\d+)?step$/; // postcss
export const FONT_SIZE_PROP = /^font-size$/; // postcss
export const STEP_WITH_BRACKET = /step\(/; // postcss
export const EM_FONT_SIZE_AT_BEGINNING_OF_STRING = /^\d+(\.\d+)?em\b/g; // postcss
export const POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_NUMBER_AT_END_OF_STRING = /-?\b\d+(\.\d+)?\b\s*$/g; // postcss
