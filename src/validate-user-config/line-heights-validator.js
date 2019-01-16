// @flow

import * as R from 'ramda';
import { getAllValuesOf } from '../helpers/get-all-values-of';
import { isNumeric } from '../helpers/is-numeric';
import { invariant } from '../helpers/invariant';
import { TITLE, WARNING, LINE_HEIGHT_MUST_BE_NUMBER } from '../error-messages';
import { type UserConfig } from '../models/user-config';

export const getLineHeights: (UserConfig) => * = getAllValuesOf('lineHeight');

export const lineHeightIsNumber = (lineHeight: mixed) => {
  switch (R.type(lineHeight)) {
    case 'Number':
      return isNumeric(lineHeight);
    default:
      return false;
  }
};

export const isValidField = (lineHeight: mixed) => {
  invariant(
    lineHeightIsNumber(lineHeight),
    `${TITLE} ${WARNING} ${LINE_HEIGHT_MUST_BE_NUMBER}`,
  );

  return lineHeightIsNumber(lineHeight);
};

export const validateFields = (config: UserConfig) =>
  getLineHeights(config)
    .map(isValidField)
    .every(Boolean);
