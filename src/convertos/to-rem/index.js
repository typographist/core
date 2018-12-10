import { getBase } from '../../helpers/get-base';

// toRem :: Number, Number -> String
export const toRem = (base, root) => `${getBase(base) / root}rem`;
