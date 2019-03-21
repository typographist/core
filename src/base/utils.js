const { objectValues } = require('../helpers');
const { toPxIfHasEm, toArrIsNotArr } = require('../convertors');

// makeBase :: (String | [String]) -> [Number]
const makeBase = (x) => toArrIsNotArr(x).map((b) => parseFloat(toPxIfHasEm(b)));

// basePropProcess :: Object -> Object
const basePropProcess = ({ base, ...item }) => ({
  ...item,
  base: makeBase(base),
});

// getBases :: UserConfig -> [Any]
const getBases = objectValues('base');

module.exports = {
  makeBase,
  basePropProcess,
  getBases,
};
