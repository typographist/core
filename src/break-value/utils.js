const { toPxIfHasEm } = require('../convertors');
const { objectValues } = require('../helpers');

// getBreakValues :: UserConfig -> [Any]
exports.getBreakValues = objectValues('breakpoint');

// toPxBreakValue :: Object -> Object
exports.toPxBreakValue = ({ value, ...item }) => ({
  ...item,
  value: toPxIfHasEm(value),
});
