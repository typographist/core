import * as R from 'ramda';
import { makeDefaultBreak } from './make-default-break';
import { makeNamedBreaks } from './make-named-breaks';

// createBreakpoints :: Object -> Array
export const createBreakpoints = R.converge(R.concat, [
  makeDefaultBreak,
  makeNamedBreaks,
]);
