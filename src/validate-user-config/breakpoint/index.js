import { all, pipe, objectValues, every } from '../../helpers';
import { customInvariant } from '../../utils';
import { isString, hasPxOrEm } from '../../utils/validators';

// BREAKPOINTS
const BREAKPOINT_ERROR_MESSAGE = `is invalid value. Breakpoint must be a string with a value in pixels or ems. Example 'breakpoint': '1024px' or 'breakpoint': '40em'.`;

// isValidField :: a -> Boolean | Error
export const isValidField = (x) => {
  customInvariant(
    all(isString, hasPxOrEm)(x),
    `'${x}' ${BREAKPOINT_ERROR_MESSAGE}`,
  );

  return true;
};

// isValidFields :: UserConfig -> Boolean
export const isValidFields = pipe(
  objectValues('breakpoint'),
  every(isValidField),
);
