import { makeBreakpointsProcess } from '../../make-breakpoints-model';
import { pipe, tail, head, map } from '../../helpers';

// getTailBreakpointsValues :: BreakpointsModel -> [Object]
export const getTailBreakpointsValues = pipe(
  Object.values,
  tail,
);

// getTailBreakpointsNames :: BreakpointsModel -> [String]
export const getTailBreakpointsNames = pipe(
  Object.keys,
  tail,
);

// makeBreakpointNamesList :: BreakpointsModel -> String
export const makeBreakpointNamesList = (x) =>
  `'${getTailBreakpointsNames(x).join(', ')}'`;

// getPropValue :: Object -> String
// eslint-disable-next-line no-unused-vars
export const getPropValue = ({ value, ...breaks }) => value;

// removeDefaultBreakpooint :: Object -> Object
export const removeDefaultBreakpooint = ({ initial, ...breaks }) => breaks;

// makeBreakpoints :: UserConfig -> Object
export const makeBreakpoints = pipe(
  makeBreakpointsProcess,
  removeDefaultBreakpooint,
  map(getPropValue),
);

// getInitialBreakpoint :: BreakpointsModel -> Object
export const getInitialBreakpoint = pipe(
  Object.values,
  head,
);

// setBreakpointNameProp :: (Object, Object) -> Object
export const setBreakpointNameProp = (acc, { name, ...breakpoint }) => ({
  ...acc,
  [name]: breakpoint,
});
