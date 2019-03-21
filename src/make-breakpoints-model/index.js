const memoizeone = require('memoize-one');
const { validateUserConfig } = require('../validators');
const { toPxBreakValue } = require('../break-value/utils');
const { basePropProcess } = require('../base/utils');
const { calcRatioProcess } = require('../ratio/utils');
const { setPropRoot } = require('../root/utils');
const { pipe, map, reduce } = require('../helpers');

// makeDefaultBreak :: UserConfig -> [Object]
const makeDefaultBreak = ({ base, lineHeight, ratio }) =>
  Array.of({
    base,
    lineHeight,
    ratio,
    name: 'initial',
    value: '0px',
  });

// setNameProp :: [[String, Object]] -> Object
const setNameProp = ([breakName, breakBody]) => ({
  ...breakBody,
  name: breakName,
});

// makeNamedBreaks :: UserConfig -> [Object]
const makeNamedBreaks = ({ base, lineHeight, ratio, ...breaks }) =>
  Object.entries(breaks).map(setNameProp);

// createBreakpoints :: UserConfig -> [Object]
const createBreakpoints = (x) => [
  ...makeDefaultBreak(x),
  ...makeNamedBreaks(x),
];

// renameProp :: (String, String) -> Object -> Object
const renameProp = (oldProp, newProp) => ({ [oldProp]: old, ...others }) => ({
  [newProp]: old,
  ...others,
});

// inheritProps :: ([] | [Object], Object, Number) -> Object
const inheritProps = (acc, item, index) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];

// makeBreakMap :: (Object, Object) -> Object
const makeBreakMap = (acc, breakpoint) => ({
  ...acc,
  [breakpoint.name]: breakpoint,
});

// removeNameProp :: Object -> Object
const removeNameProp = ({ name, ...breaks }) => breaks;

// makeMemoizedBreakpoints :: UserConfig -> Object
const makeMemoizedBreakpoints = pipe(
  createBreakpoints,
  map(renameProp('breakpoint', 'value')),
  map(toPxBreakValue),
  reduce(inheritProps, []),
  map(basePropProcess),
  map(calcRatioProcess),
  map(setPropRoot),
  reduce(makeBreakMap, {}),
  map(removeNameProp),
  memoizeone,
);

// makeBreakpointsModel :: UserConfig -> Object | Void
exports.makeBreakpointsModel = (x) =>
  validateUserConfig(x) ? makeMemoizedBreakpoints(x) : null;
