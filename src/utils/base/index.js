import { toPxIfHasEm, toArrIsNotArr } from '../convertors';

// makeBase :: (String | [String]) -> [Number]
export const makeBase = (x) =>
  toArrIsNotArr(x).map((b) => parseFloat(toPxIfHasEm(b)));

// basePropProcess :: Object -> Object
export const basePropProcess = ({ base, ...breakpoint }) => ({
  ...breakpoint,
  base: makeBase(base),
});
