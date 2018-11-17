import R from 'ramda';
import { getAllValuesOf, isNumeric } from '../../../helpers';
import { withException } from '../../../hofs';
import { title, userConfig } from '../../error-messages';

const { configMessage, lineHeightNumber } = userConfig;

export const getLineHeights = getAllValuesOf('lineHeight');

// isNumber :: a -> Boolean
export const isNumber = R.allPass([isNumeric, R.is(Number)]);

// isNumberWithException :: a -> Boolean
export const isNumberWithException = withException(
  isNumber,
  `${title} ${configMessage} ${lineHeightNumber}`,
);

// validateFields :: (Array[Number]...) -> Boolean
export const validateFields = R.compose(
  R.all(isNumberWithException),
  getLineHeights,
);
