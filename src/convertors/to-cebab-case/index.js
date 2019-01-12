// @flow
import { separateWords } from '../../helpers/separate-words';

type ToCebabCase = (string) => string;
export const toCebabCase: ToCebabCase = separateWords('-');
