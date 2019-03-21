const { HALF } = require('../constants');

// calcLeading :: ([Number] | Number) -> Number
const calcLeading = (base, lineHeight) => Math.round(base[0] * lineHeight);

// calcRoot :: (Number) -> Number
const calcRoot = (leading) => leading * HALF;

// setPropRoot :: Object -> Object
const setPropRoot = (item) => ({
  ...item,
  root: calcRoot(calcLeading(item.base, item.lineHeight)),
});

module.exports = {
  calcLeading,
  calcRoot,
  setPropRoot,
};
