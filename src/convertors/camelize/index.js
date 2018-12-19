// @flow

import R from 'ramda';
import { DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS } from '../../constants';

type CamelizeString = string => string;
const camelizeString: CamelizeString = R.replace(
  DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS,
  (match, chr) => (chr ? chr.toUpperCase() : ''),
);

type Camelize = string => string;
export const camelize: Camelize = str => {
  const firstLetter = R.compose(
    R.toLower,
    R.head,
  );

  const wordTail = R.compose(
    camelizeString,
    R.tail,
  );

  return `${firstLetter(str)}${wordTail(str)}`;
};
