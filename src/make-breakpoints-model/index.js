import memoizeone from 'memoize-one';
import { basePropProcess } from '../utils/base';
import { calcRatioProcess } from '../utils/ratio';
import { setPropRoot } from '../utils/root';
import { isNotObject, isObject } from '../utils/validators';
import { isValidUserConfig } from '../validate-user-config';
import { pipe, map, reduce, filter } from '../lib';

// makeInitialBreakpoint :: UserConfig -> [Object]
export const makeInitialBreakpoint = (x) =>
  Array.of({
    ...filter(isNotObject)(x),
    name: 'initial',
    value: '0px',
  });

// setPropName :: [[String, Object]] -> Object
export const setPropName = ([breakName, breakBody]) => ({
  ...breakBody,
  name: breakName,
});

// makeNamedBreakpoints :: UserConfig -> [Object]
export const makeNamedBreakpoints = pipe(
  filter(isObject),
  Object.entries,
  map(setPropName),
);

// createBreakpoints :: UserConfig -> [Object]
export const createBreakpoints = (x) => [
  ...makeInitialBreakpoint(x),
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

// setBreakpointNameProp :: (Object, Object) -> Object
export const setBreakpointNameProp = (acc, { name, ...breakpoint }) => ({
  ...acc,
  [name]: breakpoint,
});

// makeBreakpointsProcess :: UserConfig -> Object
export const makeBreakpointsProcess = pipe(
  createBreakpoints,
  map(renameProp('breakpoint', 'value')),
  reduce(inheritProps, []),
  map(basePropProcess),
  map(calcRatioProcess),
  map(setPropRoot),
  reduce(setBreakpointNameProp, {}),
);

const memoizedMakeBreakpoints = memoizeone(makeBreakpointsProcess);

// makeBreakpointsModel :: UserConfig -> Object | Void

// eslint-disable-next-line consistent-return
export const makeBreakpointsModel = (x) => {
  if (isValidUserConfig(x)) {
    return memoizedMakeBreakpoints(x);
  }
};
