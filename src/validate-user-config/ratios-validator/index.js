// @flow

import R from 'ramda';
import * as regexes from '../../constants/regexes';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { isNumeric } from '../../helpers/is-numeric';
import { invariant } from '../../helpers/invariant';
import { title, userConfig } from '../../error-messages';
import { type UserConfig } from '../../models';

const { configMessage, ratioStringNumber } = userConfig;

export const getRatios: UserConfig => mixed[] = getAllValuesOf('ratio');

const ratioHasFontSize = R.test(
  regexes.POSITIVE_FLOATING_POINT_NUMBER_WITH_PX_OR_EM_UNIT_AT_THE_BEGINNING_OF_THE_STRING,
);

const ratioHasAtWord = R.test(regexes.SPACE_AT_WORD_SPACE);

const ratioHasStep = R.test(
  regexes.POSITIVE_OR_NEGATIVE_INTEGER_OR_FLOATING_POINT_NUMBER_AT_THE_END_OF_THE_STRING,
);

export const isValidRatioLiteral: string => boolean = ratio =>
  [ratioHasFontSize(ratio), ratioHasAtWord(ratio), ratioHasStep(ratio)].every(
    Boolean,
  );

export const validateField: any => boolean = R.cond([
  [R.allPass([R.is(Number), isNumeric]), R.T],
  [R.is(String), isValidRatioLiteral],
  [R.T, R.F],
]);

export const ratioIsValid: (mixed[]) => boolean = ratio => {
  invariant(
    validateField(ratio),
    `${title} ${configMessage} ${ratioStringNumber}`,
  );

  return validateField(ratio);
};

export const validateFields: UserConfig => boolean = R.compose(
  R.all(ratioIsValid),
  getRatios,
);
