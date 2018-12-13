// @flow

import R from 'ramda';
import { makeDefaultBreak } from '../make-default-break';
import { makeNamedBreaks } from '../make-named-breaks';
import { type UserConfig } from '../../models';

export const createBreakpoints = (config: UserConfig) => [
  ...makeDefaultBreak(config),
  ...makeNamedBreaks(config),
];
