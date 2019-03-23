const { BROWSER_DEFAULT_FONT_SIZE } = require('../../constants');
const { hasPx, hasEm } = require('../validators');

// percentage :: (x: Number | String | [Number]) -> String
export const percentage = (x) =>
  ''.concat((parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE) * 100, '%');

// toArrIsNotArr :: (String | [String]) -> [String]
export const toArrIsNotArr = (value) =>
  Array.isArray(value) ? value : Array.of(value);

// toPx :: String -> String
export const toPx = (x) => `${parseFloat(x) * BROWSER_DEFAULT_FONT_SIZE}px`;

// toEm :: String -> String
export const toEm = (x) =>
  ''.concat(parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE, 'em');

// toRem :: (Number, Number | [Number]) -> String
export const toRem = (root, fontSize) => `${parseFloat(fontSize) / root}rem`;

// toEmIfHasPx :: String -> String
export const toEmIfHasPx = (x) => (hasPx(x) ? toEm(x) : x);

// toPxIfHasEm :: String -> String
export const toPxIfHasEm = (x) => (hasEm(x) ? toPx(x) : x);
