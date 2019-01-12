// @flow
import { separateWords } from '../../helpers/separate-words';

type ToSnakeCase = (string) => string;
export const toSnakeCase: ToSnakeCase = separateWords('_');
