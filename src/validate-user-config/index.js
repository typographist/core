import { isValidFields as isValidBases } from './base';
import {
  isValidBreakpoints,
  isValidFields as isValidBreakpointValues,
} from './breakpoint';
import { isValidFields as isValidLineHeights } from './line-height';
import { isValidFields as isValidRatios } from './ratio';
import { all } from '../lib';

// isValidUserConfig :: UserConfig -> Boolean
export const isValidUserConfig = all(
  isValidBases,
  isValidBreakpoints,
  isValidBreakpointValues,
  isValidLineHeights,
  isValidRatios,
);
