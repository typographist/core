// @flow
import { separateWords } from '@utils/separate-words';

export const toCebabCase: (string) => string = separateWords('-');
