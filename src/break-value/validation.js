const { invariant, objectValues } = require('../helpers');
const { hasPxOrEm } = require('../validators');

const BREAKPOINT_ERROR_MESSAGE = `'breakpoint: ' must be a string with a value in pixels or ems. Example 'breakpoint': '1024px' or 'breakpoint': '40em'.`;

// getBreakValues :: UserConfig -> [Any]
const getBreakValues = objectValues('breakpoint');

// isValidBreakValue :: Any -> Boolean
const isValidBreakValue = (x) => typeof x === 'string' && hasPxOrEm(x);

// isValidField :: Any -> Boolean | Void
const isValidField = (field) => {
  invariant(isValidBreakValue(field), BREAKPOINT_ERROR_MESSAGE);

  return true;
};

// isValidBreakpoints :: UserConfig -> Boolean
const isValidBreakpoints = (x) => getBreakValues(x).every(isValidField);

module.exports = {
  getBreakValues,
  isValidBreakValue,
  isValidField,
  isValidBreakpoints,
};
