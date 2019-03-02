// @flow
import { separateWords } from './separate-words';

export const toCebabCase: (string) => string = separateWords('-');
