//  @flow strict

import R from 'ramda';

type GetFirstBase = any => number;
export const getFirstBase: GetFirstBase = R.when(R.is(Array), R.head);
