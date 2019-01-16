// @flow

import * as R from 'ramda';
import { regexes } from '../constants';
import { getAllValuesOf } from '../helpers/get-all-values-of';
import { invariant } from '../helpers/invariant';
import {
  TITLE,
  WARNING,
  BASE_MUST_CONTAIN_PX_OR_EM,
  BASE_IS_STR_OR_ARR_OF_STR,
} from '../error-messages';
import { type UserConfig } from '../models/user-config';

export const getBases: (UserConfig) => * = getAllValuesOf('base');

export const hasPxOrEm = R.test(regexes.PX_OR_EM_FONT_SIZE);

export const baseLiteralIsValid = (base: string) => {
  invariant(
    hasPxOrEm(base),
    `${TITLE} ${WARNING} ${BASE_MUST_CONTAIN_PX_OR_EM}`,
  );

  return hasPxOrEm(base);
};

export const baseIsStrOrArrStr = (base: any) => {
  switch (R.type(base)) {
    case 'Array':
      return base.every(baseLiteralIsValid);
    case 'String':
      return baseLiteralIsValid(base);
    default:
      return false;
  }
};

export const isValidField = (base: mixed) => {
  invariant(
    baseIsStrOrArrStr(base),
    `${TITLE} ${WARNING} ${BASE_IS_STR_OR_ARR_OF_STR}`,
  );

  return baseIsStrOrArrStr(base);
};

export const validateFields = (config: UserConfig) =>
  getBases(config)
    .map(isValidField)
    .every(Boolean);
