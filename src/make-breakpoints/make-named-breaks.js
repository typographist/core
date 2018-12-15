// @flow

import type { UserConfig } from '../models';

type NamedBreakpoint = {
  value: string,
  name: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
};

const setNameProp: ([string, Object]) => NamedBreakpoint = ([
  breakName,
  breakBody,
]) => ({
  ...breakBody,
  name: breakName,
});

export const makeNamedBreaks: UserConfig => * = ({
  base,
  lineHeight,
  ratio,
  ...breakpoints
}) => Object.entries(breakpoints).map(setNameProp);
