import { pipe, flatten, every, objectValues, invariant } from '../../helpers';
import { hasPxOrEm } from '../../utils/validators';

const BASE_ERROR_MESSAGE = `is invalid value. Base must be a string with the value in pixels or ems or an array of strings. Example 'base': ['14px', '32px'] or 'base': '16em'.`;

// isValidBase :: a -> Boolean | Void
export const isValidBase = (x) => {
  invariant(hasPxOrEm(x), `'${x}' ${BASE_ERROR_MESSAGE}`);

  return true;
};

// isValidBases :: UserConfig -> Boolean
export const isValidBases = pipe(
  objectValues('base'),
  flatten,
  every(isValidBase),
);
