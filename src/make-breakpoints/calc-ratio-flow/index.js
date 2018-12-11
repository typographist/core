import { getFirstBase } from '../../helpers/get-first-base';
import { calcRatio, getFontSize, getStep } from '../../calculators/calc-ratio';

/*
  InputBreakpoint :: {
    base :: Number | [Number],
    lineHeight :: Number,
    name :: String,
    ratio :: Number | String,
    value :: String
  }

  OutpubBreakpoint :: {
    base :: Number | [Number],
    lineHeight :: Number,
    name :: String,
    ratio :: Number,
    value :: String
  }
*/

// calcRatioFlow :: InputBreakpoint -> OutpubBreakpoint
export const calcRatioFlow = item => ({
  ...item,
  ratio:
    typeof item.ratio === 'string'
      ? calcRatio(
          getFontSize(item.ratio),
          getStep(item.ratio),
          getFirstBase(item.base),
        )
      : item.ratio,
});
