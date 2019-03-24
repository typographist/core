import { isValidFields as isValidBases } from './base';
import { isValidFields as isValidBreakpointValues } from './breakpoint';
import { isValidFields as isValidLineHeights } from './line-height';
import { isValidFields as isValidRatios } from './ratio';
import { all } from '../helpers';

// isValidUserConfig :: UserConfig -> Boolean
export const isValidUserConfig = all(
  isValidBases,
  isValidBreakpointValues,
  isValidLineHeights,
  isValidRatios,
);
