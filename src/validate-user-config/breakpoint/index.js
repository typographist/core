import { all, pipe, filter, objectValues, every } from '../../helpers';
import { invariant } from '../../utils';
import { isObject, isString, hasPx } from '../../utils/validators';

// hasBreakpointProp :: [String, Object] -> Boolean
export const hasBreakpointProp = ([name, body]) => {
  invariant(
    body.breakpoint,
    `"${name}": must contain the mandatory breakpoint property. Example "${name}": {breakpoint: '768px'}.`,
  );

  return true;
};

// isValidBreakpoints :: UserConfig -> Boolean
export const isValidBreakpoints = pipe(
  filter(isObject),
  Object.entries,
  every(hasBreakpointProp),
);

const BREAKPOINT_ERROR_MESSAGE = `is invalid value. Breakpoint must be a string with a value (in pixels). Example 'breakpoint': '1024px'.`;

// isValidField :: a -> Boolean
export const isValidField = (x) => {
  invariant(all(isString, hasPx)(x), `'${x}' ${BREAKPOINT_ERROR_MESSAGE}`);

  return true;
};

// isValidFields :: UserConfig -> Boolean
export const isValidFields = pipe(
  objectValues('breakpoint'),
  every(isValidField),
);
