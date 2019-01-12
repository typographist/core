// @flow

import { type UserConfig } from '../models';

export const makeDefaultBreak: (UserConfig) => * = ({
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
