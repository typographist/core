const { makeBreakpointsModel } = require('../../make-breakpoints-model');
const { pipe, map, tail, head } = require('../../helpers');

// getTailBreakpointsValues :: Object -> [Object]
export const getTailBreakpointsValues = pipe(
  Object.values,
  tail,
);

// getTailBreakpointsNames :: Object -> [String]
export const getTailBreakpointsNames = pipe(
  Object.keys,
  tail,
);

// makeBreakpointNamesList :: UserConfig -> String
export const makeBreakpointNamesList = (breaksMap) =>
  `'${getTailBreakpointsNames(breaksMap).join(', ')}'`;

// getPropValue :: Object -> String
// eslint-disable-next-line no-unused-vars
export const getPropValue = ({ value, ...breaks }) => value;

// removeDefaultBreakpooint :: Object -> Object
export const removeDefaultBreakpooint = ({ initial, ...breaks }) => breaks;

// makeBreakpoints :: UserConfig -> Object
export const makeBreakpoints = pipe(
  makeBreakpointsModel,
  removeDefaultBreakpooint,
  map(getPropValue),
);

// getInitialBreakpoint :: [Object] -> Object
export const getInitialBreakpoint = pipe(
  Object.values,
  head,
);
