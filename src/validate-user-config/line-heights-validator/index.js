// @flow

import R from 'ramda';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { isNumeric } from '../../helpers/is-numeric';
import { invariant } from '../../helpers/invariant';
import { title, userConfig } from '../../error-messages';
import { type UserConfig } from '../../models';

const { configMessage, lineHeightNumber } = userConfig;

export const getLineHeights: UserConfig => mixed[] = getAllValuesOf(
  'lineHeight',
);

export const lineHeightIsNumber: mixed => boolean = lineH => {
  switch (R.type(lineH)) {
    case 'Number':
      return isNumeric(lineH);
    default:
      return false;
  }
};

export const isValidField: mixed => boolean = lineH => {
  invariant(
    lineHeightIsNumber(lineH),
    `${title} ${configMessage} ${lineHeightNumber}`,
  );

  return lineHeightIsNumber(lineH);
};

export const validateFields: UserConfig => boolean = config =>
  getLineHeights(config)
    .map(isValidField)
    .every(Boolean);
