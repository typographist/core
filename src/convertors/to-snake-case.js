// @flow
import { separateWords } from '@utils/separate-words';

export const toSnakeCase: (string) => string = separateWords('_');
