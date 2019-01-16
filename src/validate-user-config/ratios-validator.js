// @flow

import * as R from 'ramda';
import { regexes } from '../constants';
import { getAllValuesOf } from '../helpers/get-all-values-of';
import { isNumeric } from '../helpers/is-numeric';
import { invariant } from '../helpers/invariant';
import { TITLE, WARNING, RATIO_IS_STRING_OR_NUMBER } from '../error-messages';
import { type UserConfig } from '../models/user-config';

export const getRatios: (UserConfig) => * = getAllValuesOf('ratio');

const ratioHasFontSize = R.test(
  regexes.PX_OR_EM_FONT_SIZE_AT_BEGINNING_OF_STRING,
);

const ratioHasAtWord = R.test(regexes.SPACE_AT_WORD_SPACE);

const ratioHasStep = R.test(
  regexes.POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING,
);

export const isValidRatioLiteral = (ratio: string) =>
  [ratioHasFontSize(ratio), ratioHasAtWord(ratio), ratioHasStep(ratio)].every(
    Boolean,
  );

const isStringOrNumber = (ratio: any) => {
  switch (R.type(ratio)) {
    case 'String':
      return isValidRatioLiteral(ratio);
    case 'Number':
      return isNumeric(ratio);
    default:
      return false;
  }
};

export const isValidField = (ratio: mixed) => {
  invariant(
    isStringOrNumber(ratio),
    `${TITLE} ${WARNING} ${RATIO_IS_STRING_OR_NUMBER}`,
  );

  return isStringOrNumber(ratio);
};

export const validateFields = (config: UserConfig) =>
  getRatios(config)
    .map(isValidField)
    .every(Boolean);
