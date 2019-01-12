// @flow

import * as R from 'ramda';
import * as constants from '../../constants';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { invariant } from '../../helpers/invariant';
import { title, userConfig } from '../../error-messages';
import { type UserConfig } from '../../models';

const { configMessage, breakpointString, breakpointPx } = userConfig;
const isString = R.is(String);
const hasPxOrEm = R.test(constants.PX_OR_EM_FONT_SIZE);

export const getBreakValues: (UserConfig) => mixed[] = getAllValuesOf('value');

export const breakValIsStr: (mixed) => boolean = (val) => {
  invariant(isString(val), `${title} ${configMessage} ${breakpointString}`);

  return isString(val);
};

export const breakValHasPxOrEm: (any) => boolean = (val) => {
  invariant(hasPxOrEm(val), `${title} ${configMessage} ${breakpointPx}`);

  return hasPxOrEm(val);
};

export const isValidField: (mixed) => boolean = (val) =>
  [breakValIsStr(val), breakValHasPxOrEm(val)].every(Boolean);

export const validateFields: (UserConfig) => boolean = (config) =>
  getBreakValues(config)
    .map(isValidField)
    .every(Boolean);
