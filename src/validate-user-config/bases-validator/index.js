// @flow

import R from 'ramda';
import * as regexp from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { invariant } from '../../helpers/invariant';
import { typeOf } from '../../helpers/type-of';
import { title, userConfig } from '../../error-messages';
import { type UserConfig } from '../../models';

const { configMessage, basePxEm, baseArrayString } = userConfig;

export const getBases: UserConfig => mixed[] = getAllValuesOf('base');

export const hasPxOrEm = R.test(
  regexp.INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT,
);

export const baseLiteralIsValid: string => boolean = base => {
  invariant(hasPxOrEm(base), `${title} ${configMessage} ${basePxEm}`);

  return hasPxOrEm(base);
};

export const baseIsStrOrArrStr: any => boolean = base => {
  switch (typeOf(base)) {
    case 'array':
      return base.every(baseLiteralIsValid);
    case 'string':
      return baseLiteralIsValid(base);
    default:
      return false;
  }
};

export const isValidField: mixed => boolean = base => {
  invariant(
    baseIsStrOrArrStr(base),
    `${title} ${configMessage} ${baseArrayString}`,
  );

  return baseIsStrOrArrStr(base);
};

export const validateFields: UserConfig => boolean = config =>
  getBases(config)
    .map(isValidField)
    .every(Boolean);
