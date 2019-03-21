const { isValidBases } = require('../base/validation');
const { isValidBreakpoints } = require('../break-value/validation');
const { isValidLineHeights } = require('../line-height/validation');
const { isValidRatios } = require('../ratio/validation');

// ratioHasAtWord :: String -> Boolean
exports.ratioHasAtWord = (x) => /\sat\s/.test(x);

// ratioHasFontSize :: String -> Boolean
exports.ratioHasFontSize = (x) => /^\d+(\.\d+)?(px|em)\b/g.test(x);

// ratioHasStep :: String -> Boolean
exports.ratioHasStep = (x) => /-?\b\d+(\.\d+)?\b\s*$/g.test(x);

// hasPxOrEm :: Any -> Boolean
exports.hasPxOrEm = (x) => /\d+(\.\d+)?(px|em)/.test(x);

// hasEm :: Any -> Boolean
exports.hasEm = (x) => /\d+(\.\d+)?em/.test(x);

// hasPx :: Any -> Boolean
exports.hasPx = (x) => /\d+(\.\d+)?px/.test(x);

// isValidStep :: String -> Boolean
exports.isValidStep = (x) => /^-?\d+(\.\d+)?$/.test(x);

// isNumeric :: Any -> Boolean
exports.isNumeric = (x) => !Number.isNaN(parseFloat(x)) && isFinite(x);

// validateUserConfig :: UserConfig -> Boolean
exports.validateUserConfig = (x) =>
  [
    isValidBases(x),
    isValidBreakpoints(x),
    isValidLineHeights(x),
    isValidRatios(x),
  ].every(Boolean);
