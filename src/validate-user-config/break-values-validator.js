// @flow

import * as R from 'ramda';
import { Right, Left } from 'igogo';
import { VAL_WITH_PX_OR_EM } from '../constants';
import { BREAKPOINT_ERROR_MESSAGE } from '../error-messages';
import { errorReporter } from '../utils/error-reporter';
import { deeperObjectValues } from '../utils/deeper-object-values';
import { type UserConfig } from '../models/user-config';

export const getBreakValues: (UserConfig) => * = deeperObjectValues(
  'breakpoint',
);

export const hasPxOrEm: (any) => boolean = R.test(VAL_WITH_PX_OR_EM);

export const isValidBreakValue: (mixed) => boolean = R.both(
  R.is(String),
  hasPxOrEm,
);

export const eitherIsValidField = (field: mixed) =>
  isValidBreakValue(field) ? Right(true) : Left(BREAKPOINT_ERROR_MESSAGE);

export const isValidField = (field: mixed) =>
  eitherIsValidField(field).fold(errorReporter, (x) => x);

export const validateFields: (UserConfig) => * = R.compose(
  R.all(isValidField),
  getBreakValues,
);
