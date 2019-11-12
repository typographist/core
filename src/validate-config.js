var utils = require('./lib');

var ERROR_PREFIX = '[typographist]: Check your config. ';

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

var invariantWithErrorPrefix = function(condition, message) {
  return utils.invariant(condition, ERROR_PREFIX + message);
};

// hasPx :: a -> Boolean
var hasPx = function(x) {
  return /\d+(\.\d+)?px/.test(x);
};

// ---------- BASE ------------------------------------------------------------

// validateField :: a -> Void
var validateBase = function(x) {
  return invariantWithErrorPrefix(
    hasPx(x),
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
    invariantWithErrorPrefix(
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
  invariantWithErrorPrefix(
    typeof x === 'string' && hasPx(x),
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
  invariantWithErrorPrefix(
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

// ratioHasFontSize :: String -> Boolean
var ratioHasFontSize = function(x) {
  return /^\d+(\.\d+)?px\b/g.test(x);
};

// ratioHasAtWord :: String -> Boolean
var ratioHasAtWord = function(x) {
  return /\sat\s/.test(x);
};

// ratioHasStep :: String -> Boolean
var ratioHasStep = function(x) {
  return /-?\b\d+(\.\d+)?\b\s*$/g.test(x);
};

// validateField :: a -> Void
var validateRatio = function(x) {
  var isValid =
    (typeof x === 'number' && utils.isNumeric(x)) ||
    (ratioHasFontSize(x) && ratioHasAtWord(x) && ratioHasStep(x));

  utils.invariant(isValid, ERROR_PREFIX + "'" + x + "' " + RATIO_ERROR_MESSAGE);
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
  hasPx,
  validateBase,
  validateBases,
  hasBreakpointProp,
  validateBreakpoint,
  validateBreakpoints,
  validateLineHeight,
  validateLineHeights,
  ratioHasFontSize,
  ratioHasAtWord,
  ratioHasStep,
  validateRatio,
  validateRatios,
  validateConfig,
};
