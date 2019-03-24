const { makeBreakpointsModel } = require('../../make-breakpoints-model');
const { pipe, map, tail, head } = require('../../helpers');

// getTailBreakpointsValues :: Object -> [Object]
export const getTailBreakpointsValues = pipe(
  Object.values,
  tail,
);

// getTailBreakpointsNames :: UserConfig -> [String]
export const getTailBreakpointsNames = pipe(
  Object.keys,
  tail,
);

// makeBreakNamesRow :: UserConfig -> String
export const makeBreakNamesRow = (breaksMap) =>
  `'${getTailBreakpointsNames(breaksMap).join(', ')}'`;

// getPropValue :: Object -> String
// eslint-disable-next-line no-unused-vars
export const getPropValue = ({ value, ...breaks }) => value;

export const removeInitialBreak = ({ initial, ...breaks }) => breaks;

// makeBreakpoints :: UserConfig -> Object
export const makeBreakpoints = pipe(
  makeBreakpointsModel,
  removeInitialBreak,
  map(getPropValue),
);

// getInitialBreakpoint :: [Object] -> Object
export const getInitialBreakpoint = pipe(
  Object.values,
  head,
);
