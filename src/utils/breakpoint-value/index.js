import { toPxIfHasEm } from '../convertors';

// toPxBreakValue :: Object -> Object
export const toPxBreakValue = ({ value, ...breakpoint }) => ({
  ...breakpoint,
  value: toPxIfHasEm(value),
});
