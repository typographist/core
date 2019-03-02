// @flow

import type { UserConfig, UnstableDefaultBreak } from '../models';

export const makeDefaultBreak: (UserConfig) => UnstableDefaultBreak[] = ({
  base,
  lineHeight,
  ratio,
}) =>
  Array.of({
    base,
    lineHeight,
    ratio,
    name: 'default',
    value: '0px',
  });
