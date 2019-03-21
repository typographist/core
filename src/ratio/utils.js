const { toPxIfHasEm } = require('../convertors');
const { objectValues } = require('../helpers');

// getFontSizeFromRatio :: (String) -> [String]
const getFontSizeFromRatio = (x) => x.match(/\b\d+(\.\d+)?(px|em)\b/g) || [];

// getStepFromRatio :: String -> [String]
const getStepFromRatio = (x) => x.match(/-?\b\d+(\.\d+)?\b\s*$/g) || [];

// makeStepFromRatio :: String -> Number
const makeStepFromRatio = (x) => parseFloat(getStepFromRatio(x));

// makeFontSizeFromRatio :: String -> Number
const makeFontSizeFromRatio = (x) =>
  parseFloat(getFontSizeFromRatio(x).map(toPxIfHasEm));

// calcRatio :: (String, [Number]) -> Number
const calcRatio = (ratio, base) =>
  (makeStepFromRatio(ratio) / base[0]) ** (1 / makeFontSizeFromRatio(ratio));

// calcRatioProcess :: Object -> Object
const calcRatioProcess = ({ base, ratio, ...item }) => ({
  ...item,
  base,
  ratio: typeof ratio === 'string' ? calcRatio(ratio, base) : ratio,
});

// getRatios :: UserConfig -> [Any]
const getRatios = objectValues('ratio');

module.exports = {
  makeStepFromRatio,
  makeFontSizeFromRatio,
  calcRatio,
  calcRatioProcess,
  getRatios,
};
