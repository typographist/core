import { pipe, flatten, every, objectValues } from '../../helpers';
import { customInvariant } from '../../utils';
import { hasPxOrEm } from '../../utils/validators';

const BASE_ERROR_MESSAGE = `is invalid value. Base must be a string with the value in pixels or ems or an array of strings. Example 'base': ['14px', '32px'] or 'base': '16em'.`;

// isValidField :: a -> Boolean | Error
export const isValidField = (x) => {
  customInvariant(hasPxOrEm(x), `'${x}' ${BASE_ERROR_MESSAGE}`);

  return true;
};

// isValidFields :: UserConfig -> Boolean
export const isValidFields = pipe(
  objectValues('base'),
  flatten,
  every(isValidField),
);
