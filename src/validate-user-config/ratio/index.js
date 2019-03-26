import { invariant } from '../../utils';
import {
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
  isNumerical,
} from '../../utils/validators';
import { all, objectValues, pipe, every } from '../../helpers';

const RATIO_ERROR_MESSAGE = `is ivalid value. Ratio must be a number or string containing the font size (in pixels), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`;

// if ratio is string. Example '36px at 6'
// isValidRatioString :: String -> Boolean
export const isValidRatioString = (x) => {
  invariant(
    all(ratioHasFontSize, ratioHasAtWord, ratioHasStep)(x),
    `'${x}' ${RATIO_ERROR_MESSAGE}`,
  );

  return true;
};

// isValidRatioNumber :: a -> Boolean
export const isValidRatioNumber = (x) => {
  invariant(isNumerical(x), `'${x}' ${RATIO_ERROR_MESSAGE}`);

  return true;
};

// isValidField :: a -> Boolean
export const isValidField = (x) => {
  if (typeof x === 'string') return isValidRatioString(x);

  if (typeof x === 'number') return isValidRatioNumber(x);

  return false;
};

// isValidFields :: UserConfig -> Boolean
export const isValidFields = pipe(
  objectValues('ratio'),
  every(isValidField),
);
