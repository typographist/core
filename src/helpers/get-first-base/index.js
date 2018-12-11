import R from 'ramda';

// getFirstBase :: [Number] | Number -> Number
export const getFirstBase = R.when(R.is(Array), R.head);
