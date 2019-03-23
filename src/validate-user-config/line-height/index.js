import { invariant, pipe, objectValues, every } from '../../helpers';
import { isNumerical } from '../../utils/validators';

// LINE HEIGHTS
const LINE_HEIGHT_ERRROR_MESSAGE = `is invalid value. LineHeight must be a number. Example 'lineHeight': 1.5`;

// isValidField :: a -> Boolean | Void
export const isValidField = (x) => {
  invariant(isNumerical(x), `${x} ${LINE_HEIGHT_ERRROR_MESSAGE}`);

  return true;
};

// isValidLineHeights :: UserConfig -> Boolean
export const isValidLineHeights = pipe(
  objectValues('lineHeight'),
  every(isValidField),
);
