// @flow

import * as R from 'ramda';
import { Left, Right } from 'igogo';
import { VAL_IN_PX_OR_EM } from '../constants/regexes';
import { BASE_ERROR_MESSAGE } from '../error-messages';
import { getAllValuesOf } from '../helpers/get-all-values-of';
import { errorReporter } from '../helpers/error-reporter';
import { type UserConfig } from '../models/user-config';

export const getBases: (UserConfig) => * = getAllValuesOf('base');

export const eitherIsValidField = (field: mixed) =>
  Array.prototype.concat.call([], field).every((f) => VAL_IN_PX_OR_EM.test(f))
    ? Right(true)
    : Left(BASE_ERROR_MESSAGE);

export const isValidField = (field: mixed) =>
  eitherIsValidField(field).fold(errorReporter, (x) => x);

export const validateFields: (UserConfig) => * = R.compose(
  R.all(isValidField),
  getBases,
);
