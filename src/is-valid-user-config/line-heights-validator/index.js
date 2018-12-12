// @flow

import R from 'ramda';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { isNumeric } from '../../helpers/is-numeric';
import { withException } from '../../HOFs';
import { title, userConfig } from '../../error-messages';

const { configMessage, lineHeightNumber } = userConfig;

type GetLineHeights = any => number[];
export const getLineHeights: GetLineHeights = getAllValuesOf('lineHeight');

type IsNumber = any => boolean;
export const isNumber: IsNumber = R.allPass([isNumeric, R.is(Number)]);

type LineHeightIsNumber = any => boolean;
export const lineHeightIsNumber: LineHeightIsNumber = withException(
  isNumber,
  `${title} ${configMessage} ${lineHeightNumber}`,
);

type ValidateFields = (number[]) => boolean;
export const validateFields: ValidateFields = R.compose(
  R.all(lineHeightIsNumber),
  getLineHeights,
);
