const { makeBreakpointsModel } = require('../../make-breakpoints-model');
const { pipe, map, tail, head } = require('../../helpers');

// getTailBreaksValues :: Object -> [Object]
export const getTailBreaksValues = pipe(
  Object.values,
  tail,
);

// getTailBreaksNames :: Object -> [String]
export const getTailBreaksNames = pipe(
  Object.keys,
  tail,
);

// makeBreakNamesRow :: Object -> String
export const makeBreakNamesRow = (breaksMap) =>
  `'${getTailBreaksNames(breaksMap).join(', ')}'`;

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

// getDefaultBreak :: [Object] -> Object
export const getDefaultBreak = pipe(
  Object.values,
  head,
);
