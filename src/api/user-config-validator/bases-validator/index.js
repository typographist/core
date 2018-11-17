import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT } from '../../../constants/regexes';
import { getAllValuesOf } from '../../../helpers';
import { withException } from '../../../hofs';
import { title, userConfig } from '../../error-messages';

const { configMessage, basePxEm, baseArrayString } = userConfig;

export const getBases = getAllValuesOf('base');

// curriedHasPxOrEm :: a ->  Boolean
export const hasPxOrEm = R.test(
  INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT,
);

export const hasPxOrEmWithException = withException(
  hasPxOrEm,
  `${title} ${configMessage} ${basePxEm}`,
);

// isStringOrArrayOfStrings :: (Array[String] | String) -> Boolean
export const isStringOrArrayOfStrings = R.cond([
  [R.is(Array), x => hasPxOrEmWithException(x)],
  [R.is(String), str => hasPxOrEmWithException(str)],
  [R.T, R.F],
]);

// isValidField :: a -> Boolean
export const isValidField = withException(
  isStringOrArrayOfStrings,
  `${title} ${configMessage} ${baseArrayString}`,
);

// validateFields :: (Array[Array[String]...]... | String]...) -> Boolean
export const validateFields = R.compose(
  R.all(isStringOrArrayOfStrings),
  getBases,
);
