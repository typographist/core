// @flow

import type { UserConfig } from '../models/user-config';

export type NamedBreakpoint = {
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

export const makeNamedBreaks = ({
  base,
  lineHeight,
  ratio,
  ...breakpoints
}: UserConfig): * => Object.entries(breakpoints).map(setNameProp);
