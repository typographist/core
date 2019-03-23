import { isValidBases } from './base';
import { isValidBreakpointValues } from './breakpoint';
import { isValidLineHeights } from './line-height';
import { all } from '../helpers';

// isValidUserConfig :: UserConfig -> Boolean
export const isValidUserConfig = all(
  isValidBases,
  isValidBreakpointValues,
  isValidLineHeights,
  // isValidRatios,
);
