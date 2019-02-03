// @flow

import * as R from 'ramda';
import type {
  UserConfig,
  NotFilledDefaultBreakWithoutName,
  NotFilledNamedBreak,
} from '../models';

const setNameProp: (
  [string, NotFilledDefaultBreakWithoutName],
) => { name: string, ...NotFilledDefaultBreakWithoutName } = ([
  breakName,
  breakBody,
]) => ({
  ...breakBody,
  name: breakName,
});

export const makeNamedBreaks: (UserConfig) => NotFilledNamedBreak[] = R.compose(
  R.map(setNameProp),
  R.toPairs,
  R.omit(['base', 'lineHeight', 'ratio']),
);
