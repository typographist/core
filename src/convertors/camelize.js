// @flow

import * as R from 'ramda';
import { regexes } from '../constants';

const camelizeString = R.replace(
  regexes.DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
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

export const camelize = (str: string) => `${firstLetter(str)}${wordTail(str)}`;
