import R from 'ramda';

// stripBase :: [String] | String -> [Number] | Number
export const stripBase = R.evolve({
  base: R.ifElse(R.is(Array), R.map(parseFloat), parseFloat),
});
