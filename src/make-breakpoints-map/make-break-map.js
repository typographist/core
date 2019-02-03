// @flow

import type { BreakWithRoot, UnstableBreaksMap } from '../models';

export const makeBreakMap: (
  UnstableBreaksMap | {||},
  BreakWithRoot,
) => UnstableBreaksMap = (map, obj): UnstableBreaksMap => ({
  ...map,
  [obj.name]: obj,
});
