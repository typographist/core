import { validateFields as validateBases } from './base';
import {
  validateBreakpoints,
  validateFields as validateBreakpointValues,
} from './breakpoint';
import { validateFields as validateLineHeights } from './line-height';
import { validateFields as validateRatios } from './ratio';

// validateUserConfig :: UserConfig -> Boolean
export const validateUserConfig = (x) => {
  validateBases(x);
  validateBreakpoints(x);
  validateBreakpointValues(x);
  validateLineHeights(x);
  validateRatios(x);
};
