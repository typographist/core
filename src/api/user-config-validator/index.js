import R from 'ramda';
import { validateFields as isValidBases } from './bases-validator';
import { validateFields as isValidBreakpoints } from './breakpoints-validator';
import { validateFields as isValidLineHeights } from './line-heights-validator';
import { validateFields as isValidRatios } from './ratios-validator';

// userConfigValidator :: (Object[a]) -> Boolean
export const userConfigValidator = R.allPass([
  isValidBases,
  isValidBreakpoints,
  isValidLineHeights,
  isValidRatios,
]);
