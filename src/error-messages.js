// @flow

export const BASE_ERROR_MESSAGE = `'base: ' must be a string with a value in pixels or ems or an array of strings.
// Example 'base': ['1em', '32px'] or 'base': '16px'.`;

export const BREAKPOINT_ERROR_MESSAGE = `'breakpoint: ' must be a string with a value in pixels or ems. 
// Example 'breakpoint': '1024px' or 'breakpoint': '40em'.`;

export const LINE_HEIGHT_ERRROR_MESSAGE = `'lineHeight: ' must be a number. 
// Example 'lineHeight': 1.5`;

export const RATIO_ERROR_MESSAGE = `'ratio: ' must contain a number or a string containing the font size, the word 'at' and step. 
// Example base: 1.25 or base: '36px at 6'.`;
