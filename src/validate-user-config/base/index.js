import { flatten, objectValues } from '../../lib';
import { invariant } from '../../utils';
import { hasPx } from '../../utils/validators';

const BASE_ERROR_MESSAGE = `is invalid value. Base must be a string with the value in pixels or an array of strings. Example 'base': '16px' or 'base': ['14px', '32px'].`;

// validateField :: a -> Void
export const validateField = (x) => {
  invariant(hasPx(x), `'${x}' ${BASE_ERROR_MESSAGE}`);
};

// validateFields :: UserConfig -> Void
export const validateFields = (x) =>
  flatten(objectValues('base')(x)).forEach(validateField);
