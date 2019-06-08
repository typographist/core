import { invariant } from '../../utils';
import {
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
  isNumerical,
} from '../../utils/validators';
import { all, objectValues } from '../../lib';

const RATIO_ERROR_MESSAGE = `is ivalid value. Ratio must be a number or string containing the font size (in pixels), the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.`;

// validateField :: a -> Void
export const validateField = (x) => {
  const isValidRatio =
    isNumerical(x) || all(ratioHasFontSize, ratioHasAtWord, ratioHasStep)(x);

  invariant(isValidRatio, `'${x}' ${RATIO_ERROR_MESSAGE}`);
};

// validateFields :: UserConfig -> Void
export const validateFields = (x) =>
  objectValues('ratio')(x).forEach(validateField);
