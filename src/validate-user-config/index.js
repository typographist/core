// @flow

import * as R from 'ramda';
import { type UserConfig } from '@models/user-config';
import { validateFields as isValidBases } from './bases-validator';
import { validateFields as isValidBreakpoints } from './break-values-validator';
import { validateFields as isValidLineHeights } from './line-heights-validator';
import { validateFields as isValidRatios } from './ratios-validator';

export const validateUserConfig: (UserConfig) => * = R.allPass([
  isValidBases,
  isValidBreakpoints,
  isValidLineHeights,
  isValidRatios,
]);
