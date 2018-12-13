// @flow

import R from 'ramda';

type Breakpoint = {
  value: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
};

type NamedBreakpoint = {
  value: string,
  name: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
};

type SetNameProp = ([string, Breakpoint]) => NamedBreakpoint;

const setNameProp: SetNameProp = ([breakName, breakBody]) => ({
  ...breakBody,
  name: breakName,
});

type MakeNamedBreaks = any => NamedBreakpoint[] | [];
export const makeNamedBreaks: MakeNamedBreaks = R.compose(
  R.map(setNameProp),
  Object.entries,
  ({ base, lineHeight, ratio, ...breakpoints }) => breakpoints,
);
