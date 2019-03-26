import { pipe, flatten, every, objectValues } from '../../helpers';
import { invariant } from '../../utils';
import { hasPx } from '../../utils/validators';

const BASE_ERROR_MESSAGE = `is invalid value. Base must be a string with the value in pixels or an array of strings. Example 'base': '16px' or 'base': ['14px', '32px'].`;

// isValidField :: a -> Boolean
export const isValidField = (x) => {
  invariant(hasPx(x), `'${x}' ${BASE_ERROR_MESSAGE}`);

  return true;
};

// isValidFields :: UserConfig -> Boolean
export const isValidFields = pipe(
  objectValues('base'),
  flatten,
  every(isValidField),
);
