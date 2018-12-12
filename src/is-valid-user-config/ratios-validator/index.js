// @flow

import R from 'ramda';
import * as regexes from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { isNumeric } from '../../helpers/is-numeric';
import { withException } from '../../HOFs';
import { title, userConfig } from '../../error-messages';

const { configMessage, ratioStringNumber } = userConfig;

type GetRatios = any => Array<string | number>;
export const getRatios: GetRatios = getAllValuesOf('ratio');

type RatioHasFontSize = string => boolean;
const ratioHasFontSize: RatioHasFontSize = R.test(
  regexes.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
);

type RatioHasAtWord = string => boolean;
const ratioHasAtWord: RatioHasAtWord = R.test(regexes.SPACE_AT_WORD_SPACE);

type RatioHasStep = string => boolean;
const ratioHasStep: RatioHasStep = R.test(
  regexes.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
);

type IsValidRatio = string => boolean;
export const isValidRatio: IsValidRatio = R.allPass([
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
]);

type ValidateField = any => boolean;
export const validateField: ValidateField = R.cond([
  [R.allPass([R.is(Number), isNumeric]), R.T],
  [R.is(String), isValidRatio],
  [R.T, R.F],
]);

type RatioIsValid = (number | string) => boolean;
export const ratioIsValid: RatioIsValid = withException(
  validateField,
  `${title} ${configMessage} ${ratioStringNumber}`,
);

type ValidateFields = (number[] | string[]) => boolean;
export const validateFields: ValidateFields = R.compose(
  R.all(ratioIsValid),
  getRatios,
);
