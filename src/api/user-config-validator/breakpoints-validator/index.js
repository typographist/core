import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT } from '../../../constants/regexes';
import { getAllValuesOf } from '../../../helpers';
import { withException } from '../../../hofs';
import { title, userConfig } from '../../error-messages';

const { configMessage, breakpointString, breakpointPx } = userConfig;

export const getBreakpoints = getAllValuesOf('breakpoint');

// isString :: a -> Boolean
const isString = R.is(String);

export const isStringWithExeption = withException(
  isString,
  `${title} ${configMessage} ${breakpointString}`,
);

// hasPxOrEm :: String -> Boolean
const hasPx = R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT);

// hasPxWithException :: String -> Boolean
export const hasPxWithException = withException(
  hasPx,
  `${title} ${configMessage} ${breakpointPx}`,
);

// validateFields :: (Array[String]...) -> Boolean
export const validateFields = R.compose(
  R.all(R.allPass([isStringWithExeption, hasPxWithException])),
  getBreakpoints,
);
