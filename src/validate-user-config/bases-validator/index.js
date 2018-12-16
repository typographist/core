// @flow

import R from 'ramda';
import * as regexp from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { invariant } from '../../helpers/invariant';
import { title, userConfig } from '../../error-messages';
import { type UserConfig } from '../../models';

const { configMessage, basePxEm, baseArrayString } = userConfig;

export const getBases: UserConfig => mixed[] = getAllValuesOf('base');

export const hasPxOrEm = R.test(
  regexp.INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT,
);

export const baseLiteralHasPxOrEm: string => boolean = base => {
  invariant(hasPxOrEm(base), `${title} ${configMessage} ${basePxEm}`);

  return hasPxOrEm(base);
};

export const baseIsStrOrArrStr: any => boolean = R.cond([
  [R.is(Array), x => baseLiteralHasPxOrEm(x)],
  [R.is(String), str => baseLiteralHasPxOrEm(str)],
  [R.T, R.F],
]);

export const isValidField: mixed => boolean = base => {
  invariant(
    baseIsStrOrArrStr(base),
    `${title} ${configMessage} ${baseArrayString}`,
  );

  return baseIsStrOrArrStr(base);
};

export const validateFields: UserConfig => boolean = R.compose(
  R.all(isValidField),
  getBases,
);