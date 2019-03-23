import { HALF } from '../../constants';

// calcLeading :: ([Number] | Number) -> Number
export const calcLeading = (base, lineHeight) =>
  Math.round(base[0] * lineHeight);

// calcRoot :: (Number) -> Number
export const calcRoot = (leading) => leading * HALF;

// setPropRoot :: Object -> Object
export const setPropRoot = (item) => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});
