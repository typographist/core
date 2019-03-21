const { makeBreakpointsModel } = require('../make-breakpoints-model');
const { pipe, map, tail } = require('../helpers');

// getTailBreaksValues :: Object -> [Object]
const getTailBreaksValues = pipe(
  Object.values,
  tail,
);

// getTailBreaksNames :: Object -> [String]
const getTailBreaksNames = pipe(
  Object.keys,
  tail,
);

// makeBreakNamesRow :: Object -> String
const makeBreakNamesRow = (breaksMap) =>
  `'${getTailBreaksNames(breaksMap).join(', ')}'`;

// getPropValue :: Object -> String
// eslint-disable-next-line no-unused-vars
const getPropValue = ({ value, ...breaks }) => value;

const removeInitialBreak = ({ initial, ...breaks }) => breaks;

// makeBreakpoints :: UserConfig -> Object
const makeBreakpoints = pipe(
  makeBreakpointsModel,
  removeInitialBreak,
  map(getPropValue),
);

// getDefaultBreak :: Object -> Object
const getDefaultBreak = (breaksMap) => Object.values(breaksMap)[0];

module.exports = {
  getTailBreaksValues,
  getTailBreaksNames,
  makeBreakNamesRow,
  makeBreakpoints,
  getDefaultBreak,
};
