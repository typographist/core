// @flow

import * as R from 'ramda';
import { DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS } from '../../constants';

const camelizeString = R.replace(
  DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
  (match, chr) => chr.toUpperCase(),
);

const firstLetter = R.compose(
  R.toLower,
  R.head,
);

const wordTail = R.compose(
  camelizeString,
  R.tail,
);

export const camelize: string => string = str =>
  `${firstLetter(str)}${wordTail(str)}`;
