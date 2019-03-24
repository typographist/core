import memoizeone from 'memoize-one';
import { toPxBreakValue } from '../utils/breakpoint-value';
import { basePropProcess } from '../utils/base';
import { calcRatioProcess } from '../utils/ratio';
import { setPropRoot } from '../utils/root';
import { isValidUserConfig } from '../validate-user-config';
import { pipe, map, reduce } from '../helpers';

// makeDefaultBreakpoint :: UserConfig -> [Object]
export const makeDefaultBreakpoint = ({ base, lineHeight, ratio }) =>
  Array.of({
    base,
    lineHeight,
    ratio,
    name: 'initial',
    value: '0px',
  });

// setPropName :: [[String, Object]] -> Object
export const setPropName = ([breakName, breakBody]) => ({
  ...breakBody,
  name: breakName,
});

// makeNamedBreakpoints :: UserConfig -> [Object]
export const makeNamedBreakpoints = ({ base, lineHeight, ratio, ...breaks }) =>
  Object.entries(breaks).map(setPropName);

// createBreakpoints :: UserConfig -> [Object]
export const createBreakpoints = (x) => [
  ...makeDefaultBreakpoint(x),
  ...makeNamedBreakpoints(x),
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

// makeBreakpointsMap :: (Object, Object) -> Object
export const makeBreakpointsMap = (acc, breakpoint) => ({
  ...acc,
  [breakpoint.name]: breakpoint,
});

// removePropName :: Object -> Object
export const removePropName = ({ name, ...breaks }) => breaks;

// makeMemoizedBreakpoints :: UserConfig -> Object
export const makeMemoizedBreakpoints = pipe(
  createBreakpoints,
  map(renameProp('breakpoint', 'value')),
  map(toPxBreakValue),
  reduce(inheritProps, []),
  map(basePropProcess),
  map(calcRatioProcess),
  map(setPropRoot),
  reduce(makeBreakpointsMap, {}),
  map(removePropName),
  memoizeone,
);

// makeBreakpointsModel :: UserConfig -> Object | Void
export const makeBreakpointsModel = (x) =>
  isValidUserConfig(x) ? makeMemoizedBreakpoints(x) : null;
