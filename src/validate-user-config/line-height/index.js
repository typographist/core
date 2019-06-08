import { objectValues } from '../../lib';
import { invariant } from '../../utils';
import { isNumerical } from '../../utils/validators';

const LINE_HEIGHT_ERRROR_MESSAGE = `is invalid value. LineHeight must be a number. Example 'lineHeight': 1.5'`;

// validateField :: a -> Void
export const validateField = (x) => {
  invariant(isNumerical(x), `'${x}' ${LINE_HEIGHT_ERRROR_MESSAGE}`);
};

// validateFields :: UserConfig -> Void
export const validateFields = (x) =>
  objectValues('lineHeight')(x).forEach(validateField);
