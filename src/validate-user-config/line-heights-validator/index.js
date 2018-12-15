// @flow

import R from 'ramda';
import { getAllValuesOf } from '../../helpers/get-all-values-of';
import { isNumeric } from '../../helpers/is-numeric';
import { invariant } from '../../helpers/invariant';
import { title, userConfig } from '../../error-messages';
import { type UserConfig } from '../../models';

const { configMessage, lineHeightNumber } = userConfig;

export const getLineHeights: UserConfig => mixed[] = getAllValuesOf(
  'lineHeight',
);

type LineHeightIsNum = (mixed[]) => boolean;
export const lineHeightisNum: LineHeightIsNum = lineH =>
  [isNumeric(lineH), R.is(Number, lineH)].every(Boolean);

export const isValidField: (mixed[]) => boolean = lineH => {
  invariant(
    lineHeightisNum(lineH),
    `${title} ${configMessage} ${lineHeightNumber}`,
  );

  return lineHeightisNum(lineH);
};

export const validateFields: UserConfig => boolean = R.compose(
  R.all(isValidField),
  getLineHeights,
);
