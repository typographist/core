import {
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
  isNumerical,
} from '../../utils/validators';
import { invariant, all, objectValues, pipe, every } from '../../helpers';

const RATIO_ERROR_MESSAGE = `is ivalida value. Ratio must be a number or string containing the font size, the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`;

// if ratio is string. Example '36px at 6'
// isValidRatioString :: String -> Boolean
export const isValidRatioString = (x) => {
  invariant(
    all(ratioHasFontSize, ratioHasAtWord, ratioHasStep)(x),
    `${x} ${RATIO_ERROR_MESSAGE}`,
  );

  return true;
};

// isValidRatioNumber :: a -> Boolean | Void
export const isValidRatioNumber = (x) => {
  invariant(isNumerical(x), RATIO_ERROR_MESSAGE);

  return true;
};

// isValidRatio :: a -> Boolean
export const isValidRatio = (x) => {
  if (typeof x === 'string') return isValidRatioString(x);

  if (typeof x === 'number') return isValidRatioNumber(x);

  return false;
};

// isValidRatios :: UserConfig -> Boolean
export const isValidRatios = pipe(
  objectValues('ratio'),
  every(isValidRatio),
);
