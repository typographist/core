import R from 'ramda';
import { toPxIfHasEm } from '../../convertos/to-px';

// toPxBase :: {base :: [String] | String} -> {base :: [String] | String}
export const toPxBase = R.evolve({
  base: R.ifElse(R.is(Array), R.map(toPxIfHasEm), toPxIfHasEm),
});
