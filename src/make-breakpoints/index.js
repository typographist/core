import R from 'ramda';
import { toPx } from '../convertos/to-px';
import { createBreakpoints } from './create-breakpoints';
import { inheritProps } from './inherit-props';
import { toPxBase } from './to-px-base';
import { stripBase } from './strip-base';
import { calcRatioFlow } from './calc-ratio-flow';
import { setPropRoot } from './set-prop-root';

/* 
  Breakpoint :: {
    name ::  String,
    value :: String,
    base :: Number | [Number],
    lineHeight :: Number,
    ratio :: Number,
    root :: Number,
  }
*/

// makeBreakpoints :: UserConfig -> [Breakpoint]
export const makeBreakpoints = R.compose(
  R.map(setPropRoot),
  R.map(calcRatioFlow),
  inheritProps,
  R.map(stripBase),
  R.map(toPxBase),
  R.map(R.evolve({ value: toPx })),
  createBreakpoints,
);
