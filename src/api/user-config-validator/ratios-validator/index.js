import * as R from 'ramda';
import * as regexes from '../../../constants/regexes';
import { getAllValuesOf, isNumeric } from '../../../helpers';
import { withException } from '../../../hofs';
import { title, userConfig } from '../../error-messages';

const { configMessage, ratioStringNumber } = userConfig;

export const getRatios = getAllValuesOf('ratio');

// isValidRatio :: String -> Boolean
export const isValidRatio = R.allPass([
  R.test(
    regexes.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
  ),
  R.test(regexes.SPACE_AT_WORD_SPACE),
  R.test(
    regexes.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
  ),
]);

// validateField :: (Number | String) -> Boolean
export const validateField = R.cond([
  [R.allPass([R.is(Number), isNumeric]), R.T],
  [R.is(String), isValidRatio],
  [R.T, R.F],
]);

// // validateFieldWithException :: (Number | String) -> Boolean
export const validateFieldWithException = withException(
  validateField,
  `${title} ${configMessage} ${ratioStringNumber}`,
);

// // validateFields :: (Array[Number | String]...) -> Boolean
export const validateFields = R.compose(
  R.all(validateFieldWithException),
  getRatios,
);
