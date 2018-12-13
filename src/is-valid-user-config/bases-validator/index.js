// @flow

import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT } from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { withException } from '../../HOFs';
import { title, userConfig } from '../../error-messages';

const { configMessage, basePxEm, baseArrayString } = userConfig;

type GetBases = mixed => Array<Array<string> | string>;
export const getBases: GetBases = getAllValuesOf('base');

export const hasPxOrEm = R.test(
  INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT,
);

type BaseHasPxOrEm = string => boolean;
export const baseHasPxOrEm: BaseHasPxOrEm = withException(
  hasPxOrEm,
  `${title} ${configMessage} ${basePxEm}`,
);

type IsStringOrArrayOfStrings = any => boolean;
export const isStringOrArrayOfStrings: IsStringOrArrayOfStrings = R.cond([
  [R.is(Array), x => baseHasPxOrEm(x)],
  [R.is(String), str => baseHasPxOrEm(str)],
  [R.T, R.F],
]);

type IsValidField = mixed => boolean;
export const isValidField: IsValidField = withException(
  isStringOrArrayOfStrings,
  `${title} ${configMessage} ${baseArrayString}`,
);

type ValidateFields = (Array<string[] | string[]>) => boolean;
export const validateFields: ValidateFields = R.compose(
  R.all(isStringOrArrayOfStrings),
  getBases,
);
