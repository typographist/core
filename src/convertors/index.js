const { BROWSER_DEFAULT_FONT_SIZE } = require('../constants');
const { hasPx, hasEm } = require('../validators');

// percentage :: (x: Number | String | [Number]) -> String
const percentage = (x) =>
  ''.concat((parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE) * 100, '%');

// toArrIsNotArr :: (String | [String]) -> [String]
const toArrIsNotArr = (value) =>
  Array.isArray(value) ? value : Array.of(value);

// toEm :: String -> String
const toEm = (x) => ''.concat(parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE, 'em');

// toEmIfHasPx :: String -> String
const toEmIfHasPx = (x) => (hasPx(x) ? toEm(x) : x);

// toPx :: String -> String
const toPx = (x) => `${parseFloat(x) * BROWSER_DEFAULT_FONT_SIZE}px`;

// toPxIfHasEm :: String -> String
const toPxIfHasEm = (x) => (hasEm(x) ? toPx(x) : x);

module.exports = {
  percentage,
  toArrIsNotArr,
  toEm,
  toEmIfHasPx,
  toPx,
  toPxIfHasEm,
};
