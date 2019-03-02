// @flow

import { makeDefaultBreak } from './make-default-break';
import { makeNamedBreaks } from './make-named-breaks';

import type { UserConfig } from '../models';

export const createBreakpoints: (UserConfig) => * = (config) => [
  ...makeDefaultBreak(config),
  ...makeNamedBreaks(config),
];
