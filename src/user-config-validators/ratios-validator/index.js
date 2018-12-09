import R from 'ramda';
import * as regexes from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { isNumeric } from '../../helpers/is-numeric';
import { withException } from '../../HOFs';
import { title, UserConfig } from '../../error-messages';

const { configMessage, ratioStringNumber } = UserConfig;

export const getRatios = getAllValuesOf('ratio');

// ratioHasFontSize :: String -> Boolean
const ratioHasFontSize = R.test(
  regexes.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
);

// ratioHasAtWord :: String -> Boolean
const ratioHasAtWord = R.test(regexes.SPACE_AT_WORD_SPACE);

// ratioHasStep :: String -> Boolean
const ratioHasStep = R.test(
  regexes.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
);

// isValidRatio :: String -> Boolean
export const isValidRatio = R.allPass([
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
]);

// validateField :: Number | String -> Boolean
export const validateField = R.cond([
  [R.allPass([R.is(Number), isNumeric]), R.T],
  [R.is(String), isValidRatio],
  [R.T, R.F],
]);

// // ratioIsVAlid :: Number | String -> Boolean
export const ratioIsVAlid = withException(
  validateField,
  `${title} ${configMessage} ${ratioStringNumber}`,
);

// // validateFields :: [Number] | [String] -> Boolean
export const validateFields = R.compose(
  R.all(ratioIsVAlid),
  getRatios,
);
