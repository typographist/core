import {
  FONT_SIZE,
  POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING,
} from '../../constants';
import { toPxIfHasEm } from '../convertors';

// getFontSizeFromRatio :: (String) -> [String] | Null
export const getFontSizeFromRatio = (x) => x.trim().match(FONT_SIZE);

// getStepFromRatio :: String -> [String] | Null
export const getStepFromRatio = (x) =>
  x.trim().match(POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING);

// makeFontSizeFromRatio :: String -> Number
export const makeFontSizeFromRatio = (x) =>
  parseFloat(getFontSizeFromRatio(x).map(toPxIfHasEm));

// makeStepFromRatio :: String -> Number
export const makeStepFromRatio = (x) => parseFloat(getStepFromRatio(x));

// calcRatio :: (String, [Number]) -> Number
export const calcRatio = (ratio, base) =>
  (makeFontSizeFromRatio(ratio) / base[0]) ** (1 / makeStepFromRatio(ratio));

// calcRatioProcess :: Object -> Object
export const calcRatioProcess = ({ base, ratio, ...item }) => ({
  ...item,
  base,
  ratio: typeof ratio === 'string' ? calcRatio(ratio, base) : ratio,
});
