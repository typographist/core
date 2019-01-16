// @flow

import * as R from 'ramda';
import { regexes } from '../constants';
import { getAllValuesOf } from '../helpers/get-all-values-of';
import { invariant } from '../helpers/invariant';
import {
  TITLE,
  WARNING,
  BREAK_MUST_BE_A_STRING,
  BREAK_MUST_CONTAIN_PIXELS,
} from '../error-messages';
import { type UserConfig } from '../models/user-config';

const isString = R.is(String);
const hasPxOrEm = R.test(regexes.PX_OR_EM_FONT_SIZE);

export const getBreakValues: (UserConfig) => * = getAllValuesOf('value');

export const breakValIsStr = (val: mixed) => {
  invariant(isString(val), `${TITLE} ${WARNING} ${BREAK_MUST_BE_A_STRING}`);

  return isString(val);
};

export const breakValHasPxOrEm = (val: any) => {
  invariant(hasPxOrEm(val), `${TITLE} ${WARNING} ${BREAK_MUST_CONTAIN_PIXELS}`);

  return hasPxOrEm(val);
};

export const isValidField = (val: mixed) =>
  [breakValIsStr(val), breakValHasPxOrEm(val)].every(Boolean);

export const validateFields = (config: UserConfig) =>
  getBreakValues(config)
    .map(isValidField)
    .every(Boolean);
