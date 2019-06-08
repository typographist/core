import { all, pipe, filter, objectValues, forEach } from '../../lib';
import { invariant } from '../../utils';
import { isObject, isString, hasPx } from '../../utils/validators';

// validateBreakpointProp :: [String, Object] -> Void
export const validateBreakpointProp = ([name, body]) => {
  invariant(
    body.breakpoint,
    `"${name}": must contain the mandatory breakpoint property. Example "${name}": {breakpoint: '768px'}.`,
  );
};

// validateBreakpoint :: UserConfig -> Void
export const validateBreakpoints = pipe(
  filter(isObject),
  Object.entries,
  forEach(validateBreakpointProp),
);

const BREAKPOINT_ERROR_MESSAGE = `is invalid value. Breakpoint must be a string with a value (in pixels). Example 'breakpoint': '1024px'.`;

// validateField :: a -> Void
export const validateField = (x) => {
  invariant(all(isString, hasPx)(x), `'${x}' ${BREAKPOINT_ERROR_MESSAGE}`);
};

// validateFields :: UserConfig -> Void
export const validateFields = (x) =>
  objectValues('breakpoint')(x).forEach(validateField);
