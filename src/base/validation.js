const { getBases } = require('./utils');
const { hasPxOrEm } = require('../validators');
const { invariant } = require('../helpers');

const BASE_ERROR_MESSAGE = `'base: ' must be a string with a value in pixels or ems or an array of strings. Example 'base': ['1em', '32px'] or 'base': '16px'.`;

// baseHasPxOrEm :: Any -> Boolean
const baseHasPxOrEm = (x) =>
  Array.prototype.concat.call([], x).every(hasPxOrEm);

// isValidField :: Any -> Boolean | Void
const isValidField = (x) => {
  invariant(baseHasPxOrEm(x), BASE_ERROR_MESSAGE);

  return true;
};

// isValidBases :: UserConfig -> Boolean
const isValidBases = (x) => getBases(x).every(isValidField);

module.exports = {
  getBases,
  isValidField,
  isValidBases,
};
