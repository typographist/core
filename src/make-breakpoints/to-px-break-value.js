import { toPxIfHasEm } from '../convertors/to-px-if-has-em';

// toPxBreakValue :: Object -> Object
export const toPxBreakValue = ({ value, ...item }) => ({
  ...item,
  value: toPxIfHasEm(value),
});
