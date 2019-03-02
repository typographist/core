// @flow

import * as R from 'ramda';
import { Right, Left } from 'igogo';
import { LINE_HEIGHT_ERRROR_MESSAGE } from '@error-messages';
import { isNumeric } from '@utils/is-numeric';
import { errorReporter } from '@utils/error-reporter';
import { deeperObjectValues } from '@utils/deeper-object-values';
import { type UserConfig } from '@models/user-config';

export const getLineHeights: (UserConfig) => * = deeperObjectValues(
  'lineHeight',
);

export const isValidLineHeight: (mixed) => boolean = R.both(
  R.is(Number),
  isNumeric,
);

export const eitherIsValidField = (field: mixed) =>
  isValidLineHeight(field) ? Right(true) : Left(LINE_HEIGHT_ERRROR_MESSAGE);

export const isValidField = (field: mixed) =>
  eitherIsValidField(field).fold(errorReporter, (x) => x);

export const validateFields: (UserConfig) => * = R.compose(
  R.all(isValidField),
  getLineHeights,
);
