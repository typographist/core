import memoizeone from 'memoize-one';
import { toPxBreakValue } from '../utils/breakpoint-value';
import { basePropProcess } from '../utils/base';
import { calcRatioProcess } from '../utils/ratio';
import { setPropRoot } from '../utils/root';
import { isValidUserConfig } from '../validate-user-config';
import { pipe, map, reduce } from '../helpers';

// makeDefaultBreak :: UserConfig -> [Object]
export const makeDefaultBreak = ({ base, lineHeight, ratio }) =>
  Array.of({
    base,
    lineHeight,
    ratio,
    name: 'initial',
    value: '0px',
  });

// setNameProp :: [[String, Object]] -> Object
export const setNameProp = ([breakName, breakBody]) => ({
  ...breakBody,
  name: breakName,
});

// makeNamedBreaks :: UserConfig -> [Object]
export const makeNamedBreaks = ({ base, lineHeight, ratio, ...breaks }) =>
  Object.entries(breaks).map(setNameProp);

// createBreakpoints :: UserConfig -> [Object]
export const createBreakpoints = (x) => [
  ...makeDefaultBreak(x),
  ...makeNamedBreaks(x),
];

// renameProp :: (String, String) -> Object -> Object
export const renameProp = (oldProp, newProp) => ({
  [oldProp]: old,
  ...others
}) => ({
  [newProp]: old,
  ...others,
});

// inheritProps :: ([] | [Object], Object, Number) -> Object
export const inheritProps = (acc, item, index) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];

// makeBreakMap :: (Object, Object) -> Object
export const makeBreakMap = (acc, breakpoint) => ({
  ...acc,
  [breakpoint.name]: breakpoint,
});

// removeNameProp :: Object -> Object
export const removeNameProp = ({ name, ...breaks }) => breaks;

// makeMemoizedBreakpoints :: UserConfig -> Object
export const makeMemoizedBreakpoints = pipe(
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
export const makeBreakpointsModel = (x) =>
  isValidUserConfig(x) ? makeMemoizedBreakpoints(x) : null;
