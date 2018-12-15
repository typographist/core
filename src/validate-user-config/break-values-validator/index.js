// @flow

import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT } from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { invariant } from '../../helpers/invariant';
import { title, userConfig } from '../../error-messages';
import { type UserConfig } from '../../models';

const { configMessage, breakpointString, breakpointPx } = userConfig;

export const getBreakValues: UserConfig => mixed[] = getAllValuesOf('value');

export const valueIsStr: mixed => boolean = val => {
  invariant(
    typeof val === 'string',
    `${title} ${configMessage} ${breakpointString}`,
  );

  return typeof val === 'string';
};

const hasPxOrEm = R.test(INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT);

export const breakValHasPxOrEm: any => boolean = val => {
  invariant(hasPxOrEm(val), `${title} ${configMessage} ${breakpointPx}`);

  return hasPxOrEm(val);
};

// TODO: починить функцию breakValHasPxOrEm;

export const validateFields: UserConfig => boolean = R.compose(
  R.all(R.allPass([valueIsStr, breakValHasPxOrEm])),
  getBreakValues,
);
