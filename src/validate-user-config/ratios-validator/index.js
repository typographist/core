// @flow

import R from 'ramda';
import * as constants from '../../constants';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { isNumeric } from '../../helpers/is-numeric';
import { invariant } from '../../helpers/invariant';
import { title, userConfig } from '../../error-messages';
import { type UserConfig } from '../../models';

const { configMessage, ratioStringNumber } = userConfig;

export const getRatios: UserConfig => mixed[] = getAllValuesOf('ratio');

const ratioHasFontSize = R.test(
  constants.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
);

const ratioHasAtWord = R.test(constants.SPACE_AT_WORD_SPACE);

const ratioHasStep = R.test(
  constants.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
);

export const isValidRatioLiteral: string => boolean = ratio =>
  [ratioHasFontSize(ratio), ratioHasAtWord(ratio), ratioHasStep(ratio)].every(
    Boolean,
  );

const isStringOrNumber: any => boolean = ratio => {
  switch (R.type(ratio)) {
    case 'String':
      return isValidRatioLiteral(ratio);
    case 'Number':
      return isNumeric(ratio);
    default:
      return false;
  }
};

export const isValidField: mixed => boolean = ratio => {
  invariant(
    isStringOrNumber(ratio),
    `${title} ${configMessage} ${ratioStringNumber}`,
  );

  return isStringOrNumber(ratio);
};

export const validateFields: UserConfig => boolean = config =>
  getRatios(config)
    .map(isValidField)
    .every(Boolean);
