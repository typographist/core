// @flow

import * as R from 'ramda';
import { Left, Right } from 'igogo';
import { errorReporter } from '@utils/error-reporter';
import { deeperObjectValues } from '@utils/deeper-object-values';
import { VAL_WITH_PX_OR_EM } from '@constants';
import { BASE_ERROR_MESSAGE } from '@error-messages';
import { type UserConfig } from '@models/user-config';

export const getBases: (UserConfig) => * = deeperObjectValues('base');

export const eitherIsValidField = (field: mixed) =>
  Array.prototype.concat.call([], field).every((f) => VAL_WITH_PX_OR_EM.test(f))
    ? Right(true)
    : Left(BASE_ERROR_MESSAGE);

export const isValidField = (field: mixed) =>
  eitherIsValidField(field).fold(errorReporter, (x) => x);

export const validateFields: (UserConfig) => * = R.compose(
  R.all(isValidField),
  getBases,
);
