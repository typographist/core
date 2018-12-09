import { calcRoot } from '../../calculators/calc-root';
import { calcLeading } from '../../calculators/calc-leading';

/* 
  InputBreakpoint :: {
    base :: Number | [Number]
    lineHeight :: Number
    name :: String,
    ratio :: Number,
    value :: String,
  }

  OutputBreakpoint :: {
    base :: Number | [Number]
    lineHeight :: Number
    name :: String,
    ratio :: Number,
    value :: String,
    root :: Number,
  }
*/

// setPropRoot :: InputBreakpoint -> OutputBreakpoint
export const setPropRoot = item => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});
