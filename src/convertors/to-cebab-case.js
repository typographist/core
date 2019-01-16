// @flow
import { separateWords } from '../helpers/separate-words';

export const toCebabCase: (string) => string = separateWords('-');
