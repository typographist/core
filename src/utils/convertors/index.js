import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

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
