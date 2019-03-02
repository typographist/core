// @flow

import * as R from 'ramda';
import { Right, Left } from 'igogo';
import { RATIO_ERROR_MESSAGE } from '@error-messages';
import { isNumeric } from '@utils/is-numeric';
import { errorReporter } from '@utils/error-reporter';
import { deeperObjectValues } from '@utils/deeper-object-values';
import { type UserConfig } from '@models/user-config';

import * as constants from '@constants';

export const getRatios: (UserConfig) => * = deeperObjectValues('ratio');

const isNumerical = R.both(R.is(Number), isNumeric);

const ratioHasFontSize: (string) => boolean = R.test(
  constants.VAL_WITH_PX_OR_EM_AT_BEGINNING_OF_STRING,
);

const ratioHasAtWord: (string) => boolean = R.test(
  constants.SPACE_AT_WORD_SPACE,
);

const ratioHasStep: (string) => boolean = R.test(
  constants.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING,
);

// if ratio is string. Example '36px at 6'
export const isValidRatioString: (string) => boolean = R.allPass([
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
]);

export const eitherIsValidRatioString = (field: string) =>
  isValidRatioString(field) ? Right(true) : Left(RATIO_ERROR_MESSAGE);

export const eitherIsValidRatioNumber = (field: mixed) =>
  isNumerical(field) ? Right(true) : Left(RATIO_ERROR_MESSAGE);

export const eitherIsValidField: (any) => * = R.cond([
  [R.is(String), eitherIsValidRatioString],
  [R.is(Number), eitherIsValidRatioNumber],
]);

export const isValidField = (field: mixed) =>
  eitherIsValidField(field).fold(errorReporter, (x) => x);

export const validateFields: (UserConfig) => * = R.compose(
  R.all(isValidField),
  getRatios,
);
