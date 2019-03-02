// @flow
import { separateWords } from './separate-words';

export const toSnakeCase: (string) => string = separateWords('_');
