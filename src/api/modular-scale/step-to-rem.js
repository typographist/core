import { calcFontSize } from './calc-font-size';
import { getFirstBreakpoint } from '../breakpoints';
import { getBase, toRem } from '../../helpers';

//  stepToRem :: (Number, Array[Number], String) => Number
export const stepToRem = (step, breakpoints, breakpointName) => {
  let fontSize = null;

  if (breakpointName === undefined) {
    const firstBreakpoint = getFirstBreakpoint(breakpoints);
    const base = getBase(firstBreakpoint.base);
    const { ratio, root } = firstBreakpoint;
    fontSize = calcFontSize(step, base, ratio);

    return `${toRem(fontSize, root)}rem`;
  }

  const breakpoint = breakpoints.find(b => b.name === breakpointName);
  const { base, ratio, root } = breakpoint;
  fontSize = calcFontSize(step, base, ratio);

  return `${toRem(fontSize, root)}rem`;
};
