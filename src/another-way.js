// @flow
import R from 'ramda';

import { validateFields as isValidBases } from './is-valid-user-config/bases-validator';
import { validateFields as isValidBreakpoints } from './is-valid-user-config/breakpoints-validator';
import { validateFields as isValidLineHeights } from './is-valid-user-config/line-heights-validator';
import { validateFields as isValidRatios } from './is-valid-user-config/ratios-validator';
import { toPxIfHasEm } from './convertos/to-px-if-has-em';
import { calcRatio } from './calculators/calc-ratio';
import { calcRoot } from './calculators/calc-root';
import { calcLeading } from './calculators/calc-leading';

export type UserConfigBreakpoint = {
  value: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number,
};

export type UserConfig = {
  base: string | string[],
  lineHeight: number,
  ratio: string | number,
  tablet: UserConfigBreakpoint,
  desktop: UserConfigBreakpoint,
  lgDesktop: UserConfigBreakpoint,
  xlDesktop: UserConfigBreakpoint,
};

export type Breakpoint = {
  base: number[],
  lineHeight: number,
  name: string,
  ratio: number,
  root: number,
  value: string,
};

type IsValiduserConfig = any => boolean;
export const validateConfig: IsValiduserConfig = R.allPass([
  isValidBases,
  isValidBreakpoints,
  isValidLineHeights,
  isValidRatios,
]);

const makeDefaultBreak = ({ base, lineHeight, ratio }: UserConfig) =>
  Array.of({
    base,
    lineHeight,
    ratio,
    name: 'default',
    value: '0px',
  });

/** Set property `name` to object */
const setNameProp = ([breakName, breakBody]) => ({
  ...breakBody,
  name: breakName,
});

const makeNamedBreaks = ({
  base,
  lineHeight,
  ratio,
  ...breakpoints
}: UserConfig) => Object.entries(breakpoints).map(setNameProp);

export const createBreakpoints = (config: UserConfig) => [
  ...makeDefaultBreak(config),
  ...makeNamedBreaks(config),
];

const toPxValue = ({ value, ...item }) => ({
  ...item,
  value: toPxIfHasEm(value),
});

const mapBase = fn => ({ base, ...item }) => ({
  ...item,
  base: fn(base),
});

const stripBase = (base: string[]): number[] => base.map(parseFloat);
const toPxBase = base => base.map(toPxIfHasEm);
const toArray = (value: string | string[]) =>
  Array.isArray(value) ? value : Array.of(value);

const inherit = (acc, item, index) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];

type NotFilledBreakpoint = {
  name: string,
  value: string,
  base?: number[],
  lineHeight?: number,
  ratio?: number | string,
};
type FilledBreakpoint = {
  name: string,
  value: string,
  base: number[],
  lineHeight: number,
  ratio: number | string,
};
type InheritProps = (NotFilledBreakpoint[]) => FilledBreakpoint[];
const inheritProps: InheritProps = input => input.reduce(inherit, []);

export const calcRatioFlow = ({ base, ratio, ...item }: FilledBreakpoint) => ({
  ...item,
  base,
  ratio: typeof ratio === 'string' ? calcRatio(ratio, base) : ratio,
});

type FilledBreakpointStableRatio = {
  name: string,
  value: string,
  base: number[],
  lineHeight: number,
  ratio: number,
};
const setPropRoot = (item: FilledBreakpointStableRatio) => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});

type MakeBreakpointsFlow = UserConfig => Breakpoint[];
export const makeBreakpointsFlow: MakeBreakpointsFlow = R.compose(
  R.map(
    R.compose(
      setPropRoot,
      calcRatioFlow,
    ),
  ),
  inheritProps,
  R.map(
    mapBase(
      R.compose(
        stripBase,
        toPxBase,
        toArray,
      ),
    ),
  ),
  R.map(toPxValue),
  createBreakpoints,
);

export const makeBreakpoints = (config: UserConfig) =>
  validateConfig(config) ? makeBreakpointsFlow(config) : [];

export const userConfig = {
  base: ['1em', '2em'],
  lineHeight: 1.5,
  ratio: '45px at 6',
  tablet: {
    value: '40em',
    base: '17px',
  },
  desktop: {
    value: '64em',
    base: '18px',
    lineHeight: 1.7,
    ratio: 1.333,
  },
  lgDesktop: {
    value: '75em',
    base: '20px',
  },
  xlDesktop: {
    value: '100em',
    base: '22px',
  },
};

const result = makeBreakpoints(userConfig);
