// @flow
import type { Breakpoint, UserConfig } from '@models';
import * as R from 'ramda';
import { DEFAULT_BREAK, DEFAULT_BREAK_MAP } from '@constants';
import { makeBreakpointsMap } from '@make-breakpoints-map';

export const headOr: (Breakpoint[]) => Breakpoint = R.compose(
  R.defaultTo(DEFAULT_BREAK),
  R.head,
);

export const getBreaksMapOr: (UserConfig) => * = R.compose(
  R.defaultTo(DEFAULT_BREAK_MAP),
  makeBreakpointsMap,
);

export const isNumeric = (x: mixed) =>
  !Number.isNaN(parseFloat(x)) && isFinite(x);

export const errorReporter = (message: string) => {
  throw new Error(`[typographist-core]: Check your user config. ${message}`);
};

type Memo = void | mixed[];
type Config = {
  [string]: any,
};

export const deeperObjectValues: (string, Memo) => (Config) => mixed[] = (
  target,
  memo,
) => (obj) =>
  Object.keys(Object(obj)).reduce(
    (acc, key) => {
      if (key === target) {
        return [...acc, obj[key]];
      }
      if (obj[key] instanceof Object) {
        return [...deeperObjectValues(target, acc)(obj[key])];
      }

      return acc;
    },
    !Array.isArray(memo) ? [] : memo,
  );
