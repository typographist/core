// @flow

export const TITLE = 'Typographist >>>';
export const WARNING = 'Check your user config.';

export const LINE_HEIGHT_MUST_BE_NUMBER =
  'lineHeight:  must be a number. For example lineHeight: 1.5';

export const BASE_MUST_CONTAIN_PX_OR_EM =
  "base:  must contain the values in pixels or ems. For example base: '6em' or base: '38px'.";

export const BASE_IS_STR_OR_ARR_OF_STR =
  "base:  must must be a string or an array of strings. For example base: ['16px', '32px'] or base: '16px'.";

export const BREAK_MUST_BE_A_STRING =
  " breakpoint: ', must be a string. For example: 'breakpoint: '1024px''.";

export const BREAK_MUST_CONTAIN_PIXELS =
  "'breakpoint:  must be in pixels. For example breakpoint: '1024px'.";

export const RATIO_IS_STRING_OR_NUMBER =
  "ratio:  must contain a number or a string containing the font size, the word 'at' and step. For example base: 1.25 or base: '36px at 6'.";
