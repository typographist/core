// @flow
import { separateWords } from '../helpers/separate-words';

export const toSnakeCase: (string) => string = separateWords('_');
