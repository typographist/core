import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT } from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { withException } from '../../HOFs';
import { title, UserConfig } from '../../error-messages';

const { configMessage, breakpointString, breakpointPx } = UserConfig;

export const getBreakpoints = getAllValuesOf('value');

// isString :: a -> Boolean
const isString = R.is(String);

// breakpointIsString :: a -> Boolean
export const breakpointIsString = withException(
  isString,
  `${title} ${configMessage} ${breakpointString}`,
);

// hasPx :: String -> Boolean
const hasPxOrEm = R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT);

// breakpointHasPxOrEm :: String -> Boolean
export const breakpointHasPxOrEm = withException(
  hasPxOrEm,
  `${title} ${configMessage} ${breakpointPx}`,
);

// validateFields :: [String] -> Boolean
export const validateFields = R.compose(
  R.all(R.allPass([breakpointIsString, breakpointHasPxOrEm])),
  getBreakpoints,
);
