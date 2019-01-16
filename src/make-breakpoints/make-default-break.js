// @flow

import { type UserConfig } from '../models/user-config';

export const makeDefaultBreak = ({ base, lineHeight, ratio }: UserConfig): * =>
  Array.of({
    base,
    lineHeight,
    ratio,
    name: 'default',
    value: '0px',
  });
