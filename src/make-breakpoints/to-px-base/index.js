import R from 'ramda';
import { toPxIfHasEm } from '../../convertos/to-px';

// type Input = {
//   base: string | string[],
// };

// type Output = {
//   base: string | string[],
// };

// type ToPxBase = Input => Output;

export const toPxBase = R.evolve({
  base: R.ifElse(R.is(Array), R.map(toPxIfHasEm), toPxIfHasEm),
});
