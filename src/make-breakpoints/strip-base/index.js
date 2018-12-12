import R from 'ramda';

// type StripBase = (string[] | string) => string[] | string;

export const stripBase = R.evolve({
  base: R.ifElse(R.is(Array), R.map(parseFloat), parseFloat),
});
