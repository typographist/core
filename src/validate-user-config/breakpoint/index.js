import { all, invariant, pipe, objectValues, every } from '../../helpers';
import { isString, hasPxOrEm } from '../../utils/validators';

// BREAKPOINTS
const BREAKPOINT_ERROR_MESSAGE = `is invalid value. Breakpoint must be a string with a value in pixels or ems. Example 'breakpoint': '1024px' or 'breakpoint': '40em'.`;

// isValidBreakpointValue :: a -> Boolean | Void
export const isValidBreakpointValue = (x) => {
  invariant(all(isString, hasPxOrEm)(x), `'${x}' ${BREAKPOINT_ERROR_MESSAGE}`);

  return true;
};

// isValidBreakpointValues :: UserConfig -> Boolean
export const isValidBreakpointValues = pipe(
  objectValues('breakpoint'),
  every(isValidBreakpointValue),
);
