import * as R from 'ramda';
import { toPxBreakValue } from './to-px-break-value';
import { basePropProcess } from './base-prop-process';
import { createBreakpoints } from './create-breakpoints';
import { renameProp } from './rename-prop';
import { inheritProps } from './inherit-props';
import { calcRatioProcess } from './ratio-prop-utils';
import { setPropRoot } from './root-prop-utils';
import { makeBreaksMap } from './make-breaks-map';

const reduceIndexed = R.addIndex(R.reduce);

// makeBreakpointsProcess :: Object -> {a: [Object]}
export const makeBreakpointsProcess = R.compose(
  R.map(R.omit(['name'])),
  R.reduce(makeBreaksMap, {}),
  R.map(
    R.compose(
      setPropRoot,
      calcRatioProcess,
    ),
  ),
  reduceIndexed(inheritProps, []),
  R.map(
    R.compose(
      basePropProcess,
      toPxBreakValue,
      renameProp('breakpoint', 'value'),
    ),
  ),
  createBreakpoints,
);
