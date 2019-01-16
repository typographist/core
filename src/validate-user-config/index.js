// @flow

import { validateFields as isValidBases } from './bases-validator';
import { validateFields as isValidBreakpoints } from './break-values-validator';
import { validateFields as isValidLineHeights } from './line-heights-validator';
import { validateFields as isValidRatios } from './ratios-validator';
import { type UserConfig } from '../models/user-config';

export const validateUserConfig = (config: UserConfig) =>
  [
    isValidBases(config),
    isValidBreakpoints(config),
    isValidLineHeights(config),
    isValidRatios(config),
  ].every(Boolean);
