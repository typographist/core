// @flow

import R from 'ramda';
import { INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT } from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { withException } from '../../HOFs';
import { title, userConfig } from '../../error-messages';

const { configMessage, breakpointString, breakpointPx } = userConfig;

type GetBreakpoints = mixed => string[];
export const getBreakpoints: GetBreakpoints = getAllValuesOf('value');

type IsString = mixed => boolean;
const isString: IsString = R.is(String);

type BreakpointIsString = mixed => boolean;
export const breakpointIsString: BreakpointIsString = withException(
  isString,
  `${title} ${configMessage} ${breakpointString}`,
);

type HasPxOrEm = string => boolean;
const hasPxOrEm: HasPxOrEm = R.test(
  INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT,
);

type BreakpointHasPxOrEm = mixed => boolean;
export const breakpointHasPxOrEm: BreakpointHasPxOrEm = withException(
  hasPxOrEm,
  `${title} ${configMessage} ${breakpointPx}`,
);

type ValidateFields = (string[]) => boolean;
export const validateFields: ValidateFields = R.compose(
  R.all(R.allPass([breakpointIsString, breakpointHasPxOrEm])),
  getBreakpoints,
);
