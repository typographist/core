import { HALF } from '../constants';

import { calcLeading } from '../calculators/calc-leading';

// calcRoot :: Number -> Number
export const calcRoot = (x) => Math.round(x * HALF);

// setPropRoot :: Object -> Object
export const setPropRoot = (item) => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});
