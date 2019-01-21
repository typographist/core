// @flow

import { type NamedBreakpoint } from '../models/breakpoints';
import { type UserConfig } from '../models/user-config';

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
