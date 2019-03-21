const { getLineHeights } = require('./utils');
const { isNumeric } = require('../validators');
const { invariant } = require('../helpers');

const LINE_HEIGHT_ERRROR_MESSAGE = `'lineHeight: ' must be a number. Example 'lineHeight': 1.5`;

// isValidLineHeight :: Any -> Boolean
const isValidLineHeight = (x) => typeof x === 'number' && isNumeric(x);

// isValidField :: Any -> Boolean | Void
const isValidField = (field) => {
  invariant(isValidLineHeight(field), LINE_HEIGHT_ERRROR_MESSAGE);

  return true;
};

// isValidLineHeights :: UserConfig -> Boolean
const isValidLineHeights = (x) => getLineHeights(x).every(isValidField);

module.exports = {
  getLineHeights,
  isValidLineHeight,
  isValidField,
  isValidLineHeights,
};
