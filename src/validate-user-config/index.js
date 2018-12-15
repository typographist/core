// @flow

import { validateFields as isValidBases } from './bases-validator';
import { validateFields as isValidBreakpoints } from './break-values-validator';
import { validateFields as isValidLineHeights } from './line-heights-validator';
import { validateFields as isValidRatios } from './ratios-validator';
import type { UserConfig } from '../models';

export const validateUserConfig: UserConfig => boolean = config =>
  [
    isValidBases(config),
    isValidBreakpoints(config),
    isValidLineHeights(config),
    isValidRatios(config),
  ].every(Boolean);
