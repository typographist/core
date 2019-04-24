import { pipe, objectValues, every } from '../../lib';
import { invariant } from '../../utils';
import { isNumerical } from '../../utils/validators';

const LINE_HEIGHT_ERRROR_MESSAGE = `is invalid value. LineHeight must be a number. Example 'lineHeight': 1.5'`;

// isValidField :: a -> Boolean
export const isValidField = (x) => {
  invariant(isNumerical(x), `'${x}' ${LINE_HEIGHT_ERRROR_MESSAGE}`);

  return true;
};

// isValidFields :: UserConfig -> Boolean
export const isValidFields = pipe(
  objectValues('lineHeight'),
  every(isValidField),
);
