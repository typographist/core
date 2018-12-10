import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT } from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { withException } from '../../HOFs';
import { title, UserConfig } from '../../error-messages';

const { configMessage, basePxEm, baseArrayString } = UserConfig;

export const getBases = getAllValuesOf('base');

// hasPxOrEm :: String ->  Boolean
export const hasPxOrEm = R.test(
  INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT,
);

// baseHasPxOrEm :: String -> Boolean
export const baseHasPxOrEm = withException(
  hasPxOrEm,
  `${title} ${configMessage} ${basePxEm}`,
);

// isStringOrArrayOfStrings :: [String] | String -> Boolean
export const isStringOrArrayOfStrings = R.cond([
  [R.is(Array), x => baseHasPxOrEm(x)],
  [R.is(String), str => baseHasPxOrEm(str)],
  [R.T, R.F],
]);

// isValidField :: a -> Boolean
export const isValidField = withException(
  isStringOrArrayOfStrings,
  `${title} ${configMessage} ${baseArrayString}`,
);

// validateFields :: [[String]] | [String] -> Boolean
export const validateFields = R.compose(
  R.all(isStringOrArrayOfStrings),
  getBases,
);
