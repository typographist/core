import { pipe, objectValues, every } from '../../helpers';
import { customInvariant } from '../../utils';
import { isNumerical } from '../../utils/validators';

// LINE HEIGHTS
const LINE_HEIGHT_ERRROR_MESSAGE = `is invalid value. LineHeight must be a number. Example 'lineHeight': 1.5'`;

// isValidField :: a -> Boolean | Error
export const isValidField = (x) => {
  customInvariant(isNumerical(x), `'${x}' ${LINE_HEIGHT_ERRROR_MESSAGE}`);

  return true;
};

// isValidFields :: UserConfig -> Boolean
export const isValidFields = pipe(
  objectValues('lineHeight'),
  every(isValidField),
);
