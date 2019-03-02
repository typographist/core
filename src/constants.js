// @flow
import type { UserConfig, Breakpoint, BreakpointsModel } from './models';

export const HALF = 0.5;
export const BROWSER_VIEWPORT_WIDTH = '100vw';
export const BROWSER_DEFAULT_FONT_SIZE = 16;
export const SPACE_AT_WORD_SPACE = /\sat\s/;
export const POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING = /^-?\d+(\.\d+)?$/;
export const DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS = /[-_\s]+(.)?/g;
export const FONT_SIZE = /\b\d+(\.\d+)?(px|em)\b/g;
export const VAL_WITH_PX_OR_EM_AT_BEGINNING_OF_STRING = /^\d+(\.\d+)?(px|em)\b/g;
export const VAL_WITH_PX_OR_EM = /\d+(\.\d+)?(px|em)/;
export const VAL_IN_PX = /\d+(\.\d+)?px/;
export const VAL_IN_EM = /\d+(\.\d+)?em/;
export const SEPARATE_STRING_INTO_WORDS_WITH_CAPITAL_LETTER = /(?=[A-Z])/;
export const POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING = /-?\b\d+(\.\d+)?\b\s*$/g;

export const DEFAULT_CONFIG: UserConfig = {
  base: '16px',
  lineHeight: 1.5,
  ratio: 1.333,
};

export const DEFAULT_BREAK_MAP: BreakpointsModel = {
  default: {
    base: [16],
    lineHeight: 1.5,
    ratio: 1.333,
    root: 12,
    value: '0px',
  },
};

export const DEFAULT_BREAK: Breakpoint = {
  base: [16],
  lineHeight: 1.5,
  ratio: 1.333,
  root: 12,
  value: '0px',
};
