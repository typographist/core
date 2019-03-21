const {
  isNumeric,
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
} = require('../validators');
const { invariant } = require('../helpers');
const { getRatios } = require('./utils');

const RATIO_ERROR_MESSAGE = `'ratio: ' must contain a number or a string containing the font size, the word 'at' and step. Example base: 1.25 or base: '36px at 6'.`;

// isNumerical :: Any -> Boolean
const isNumerical = (x) => typeof x === 'number' && isNumeric(x);

// if ratio is string. Example '36px at 6'
// isValidRatioString :: String -> Boolean
const isValidRatioString = (x) => {
  invariant(
    ratioHasFontSize(x) && ratioHasAtWord(x) && ratioHasStep(x),
    RATIO_ERROR_MESSAGE,
  );

  return true;
};

// isValidRatioNumber :: Any -> Boolean | Void
const isValidRatioNumber = (field) => {
  invariant(isNumerical(field), RATIO_ERROR_MESSAGE);

  return true;
};

// isValidField :: Any -> Boolean
const isValidField = (x) => {
  if (typeof x === 'string') return isValidRatioString(x);

  if (typeof x === 'number') return isValidRatioNumber(x);

  return false;
};

// isValidRatios :: UserConfig -> Boolean
const isValidRatios = (x) => getRatios(x).every(isValidField);

module.exports = {
  getRatios,
  isNumerical,
  isValidRatioString,
  isValidRatioNumber,
  isValidField,
  isValidRatios,
};
