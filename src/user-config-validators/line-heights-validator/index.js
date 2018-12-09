import R from 'ramda';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { isNumeric } from '../../helpers/is-numeric';
import { withException } from '../../HOFs';
import { title, UserConfig } from '../../error-messages';

const { configMessage, lineHeightNumber } = UserConfig;

export const getLineHeights = getAllValuesOf('lineHeight');

// isNumber :: a -> Boolean
export const isNumber = R.allPass([isNumeric, R.is(Number)]);

// lineHeightIsNumber :: a -> Boolean
export const lineHeightIsNumber = withException(
  isNumber,
  `${title} ${configMessage} ${lineHeightNumber}`,
);

// validateFields :: [Number] -> Boolean
export const validateFields = R.compose(
  R.all(lineHeightIsNumber),
  getLineHeights,
);
