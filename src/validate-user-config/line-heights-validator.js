// @flow

import * as R from 'ramda';
import { Right, Left } from 'igogo';
import { type UserConfig } from '@models/user-config';
import { LINE_HEIGHT_ERRROR_MESSAGE } from '@error-messages';
import { deeperObjectValues } from '@utils/deeper-object-values';
import { errorReporter } from '@utils/error-reporter';
import { isNumeric } from '@utils/is-numeric';

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
