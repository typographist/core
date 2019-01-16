// @flow
import { makeDefaultBreak } from './make-default-break';
import { makeNamedBreaks } from './make-named-breaks';
import { type UserConfig } from '../models/user-config';

export const createBreakpoints = (config: UserConfig) => [
  ...makeDefaultBreak(config),
  ...makeNamedBreaks(config),
];
