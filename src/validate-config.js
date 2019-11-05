var utils = require('./utils');

var BASE_ERROR_MESSAGE =
  "is invalid 'base'. Base must be a string with the value in pixels or an array of strings. " +
  "Example 'base': '16px' or 'base': ['14px', '32px'].";

var BREAKPOINT_ERROR_MESSAGE =
  "is invalid 'breakpoint'. Breakpoint must be a string with a value (in pixels). " +
  "Example 'breakpoint': '1024px'.";

var LINE_HEIGHT_ERRROR_MESSAGE =
  "is invalid 'lineHeight'. LineHeight must be a number. Example 'lineHeight': 1.5'";

var RATIO_ERROR_MESSAGE =
  "is ivalid 'ratio'. Ratio must be a number or string containing the font size (in pixels), " +
  "the word 'at' and step. Example ratio: 1.25 or ratio: '36px at 6'.";

// invariantWithPrefix :: String -> (a, String) -> Void
var invariantWithPrefix = function(condition, message) {
  return utils.invariant(
    condition,
    '[typographist]: Check your config. ' + message,
  );
};

// ---------- BASE ------------------------------------------------------------
// validateField :: a -> Void
var validateBase = function(x) {
  return invariantWithPrefix(
    utils.hasPx(x),
    "'" + x + "' " + BASE_ERROR_MESSAGE,
  );
};

// validateBases :: Object -> Void
var validateBases = function(x) {
  return utils.flatten(utils.deepObjectValues('base')(x)).forEach(validateBase);
};

// ---------- BREAKPOINTS ------------------------------------------------------
// validateBreakpoint :: Object -> Void
var hasBreakpointProp = function(x) {
  var breaks = utils.omit('base', 'lineHeight', 'ratio', x);

  Object.keys(breaks).forEach((key) => {
    invariantWithPrefix(
      breaks[key].breakpoint,
      "'" +
        key +
        "': must contain the mandatory breakpoint property. Example '" +
        key +
        "': {breakpoint: '768px'}.",
    );
  });
};

// validateField :: a -> Void
var validateBreakpoint = function(x) {
  invariantWithPrefix(
    typeof x === 'string' && utils.hasPx(x),
    "'" + x + "' " + BREAKPOINT_ERROR_MESSAGE,
  );
};

// validateFields :: config -> Void
var validateBreakpoints = function(x) {
  utils
    .deepObjectValues('breakpoint')(x)
    .forEach(validateBreakpoint);
};

// ---------- LINE-HEIGHT --------------------------------------------------------
// validateField :: a -> Void
var validateLineHeight = function(x) {
  invariantWithPrefix(
    typeof x === 'number' && utils.isNumeric(x),
    "'" + x + "' " + LINE_HEIGHT_ERRROR_MESSAGE,
  );
};

// validateFields :: config -> Void
var validateLineHeights = function(x) {
  return utils
    .deepObjectValues('lineHeight')(x)
    .forEach(validateLineHeight);
};

// ---------- RATIO --------------------------------------------------------------
// validateField :: a -> Void
var validateRatio = function(x) {
  var isValid =
    (typeof x === 'number' && utils.isNumeric(x)) ||
    (utils.ratioHasFontSize(x) &&
      utils.ratioHasAtWord(x) &&
      utils.ratioHasStep(x));

  invariantWithPrefix(isValid, "'" + x + "' " + RATIO_ERROR_MESSAGE);
};

// validateFields :: config -> Void
var validateRatios = function(x) {
  return utils
    .deepObjectValues('ratio')(x)
    .forEach(validateRatio);
};

// validateConfig :: config -> Void
var validateConfig = function(x) {
  validateBases(x);
  hasBreakpointProp(x);
  validateBreakpoints(x);
  validateLineHeights(x);
  validateRatios(x);
};

module.exports = {
  validateBase,
  validateBases,
  hasBreakpointProp,
  validateBreakpoint,
  validateBreakpoints,
  validateLineHeight,
  validateLineHeights,
  validateRatio,
  validateRatios,
  validateConfig,
};
