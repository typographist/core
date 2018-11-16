import R from 'ramda';
import { toCebabCase } from '../../../helpers/separate-words';

// breakpointNamesInCebabCaseNotation :: (Array[String]) -> Array[String]
export const breakpointNamesInCebabCaseNotation = R.map(toCebabCase);
