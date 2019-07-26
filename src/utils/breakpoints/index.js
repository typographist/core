import { makeBreakpointsProcess } from '../../make-breakpoints-map';
import { pipe, map } from '../../lib';

// getTailBreakpointsValues :: BreakpointsModel -> [Object]
export const getTailBreakpointsValues = (x) => Object.values(x).slice(1);

// getTailBreakpointsNames :: BreakpointsModel -> [String]
export const getTailBreakpointsNames = (x) => Object.keys(x).slice(1);

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
export const getInitialBreakpoint = (x) => Object.values(x)[0];

// setBreakpointNameProp :: (Object, Object) -> Object
export const setBreakpointNameProp = (acc, { name, ...breakpoint }) => ({
  ...acc,
  [name]: breakpoint,
});
