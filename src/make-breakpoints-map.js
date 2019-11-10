var validateConfig = require('./validate-config').validateConfig;
var utils = require('./lib');

var FONT_SIZE = /\b\d+(\.\d+)?(px|em)\b/g;
var POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING = /-?\b\d+(\.\d+)?\b\s*$/g;
var HALF = 0.5;

// makeInitialBreakpoint :: Object -> [Object]
var makeInitialBreakpoint = function(x) {
  return [
    {
      base: x.base,
      lineHeight: x.lineHeight,
      ratio: x.ratio,
      name: 'initial',
      value: '0px',
    },
  ];
};

// makeNamedBreakpoints :: Object -> [Object]
var makeNamedBreakpoints = function(x) {
  var breaks = utils.omit('base', 'lineHeight', 'ratio', x);
  var result = [];

  for (var key in breaks) {
    breaks[key].name = key;

    result.push(breaks[key]);
  }

  return result;
};

// renameProp :: (String, String, Object) -> Object
var renameProp = function(oldProp, newProp) {
  return function(x) {
    var result = {};

    for (var key in x) {
      result[key] = x[key];
    }

    if (result[oldProp]) {
      result[newProp] = result[oldProp];
      delete result[oldProp];
    }

    return result;
  };
};

// inheritProps :: Object -> Object
var inheritProps = function(acc, item, index) {
  return acc.concat(utils.merge({}, acc[index - 1], item));
};

// ---------- BASE ------------------------------------------------------------
// normalizeBase :: Object -> Object
var normalizeBase = function(x) {
  return utils.merge(x, { base: x.base.map(parseFloat) });
};

// ---------- RATIO -----------------------------------------------------------
// makeFontSize :: (String) -> Number | Null
var makeFontSize = function(x) {
  var result = x.trim().match(FONT_SIZE);

  return result ? parseFloat(String(result)) : result;
};

// makeStep :: String -> Number | Null
var makeStep = function(x) {
  var result = x
    .trim()
    .match(POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_END_OF_STRING);

  return result ? parseFloat(String(result)) : result;
};

// calcRatio :: (String, [Number]) -> Number
var calcRatio = function(ratio, base) {
  return typeof ratio === 'string'
    ? Math.pow(makeFontSize(ratio) / base[0], 1 / makeStep(ratio))
    : ratio;
};

// normalizeRatio :: Object -> Object
var normalizeRatio = function(x) {
  return utils.merge(x, { ratio: calcRatio(x.ratio, x.base) });
};

// ---------- ROOT -----------------------------------------------------------
// calcLeading :: ([Number], Number) -> Number
var calcLeading = function(base, lineHeight) {
  return Math.round(base[0] * lineHeight);
};

// setRootProp :: Object -> Object
var setRootProp = function(x) {
  return utils.merge(x, { root: calcLeading(x.base, x.lineHeight) * HALF });
};

// setBreakpointNameProp :: (Object, Object) -> Object
var setBreakpointNameProp = function(acc, x) {
  acc[x.name] = utils.omit('name', x);

  return acc;
};

// makeBreakpointsMap :: Object -> Object
var makeBreakpointsMapProcess = function(x) {
  return []
    .concat(makeInitialBreakpoint(x), makeNamedBreakpoints(x))
    .map(renameProp('breakpoint', 'value'))
    .reduce(inheritProps, [])
    .map((item) => setRootProp(normalizeRatio(normalizeBase(item))))
    .reduce(setBreakpointNameProp, {});
};

// getBreakpoints :: Object -> Object | Void
var makeBreakpointsMap = function(x) {
  validateConfig(x);

  return makeBreakpointsMapProcess(x);
};

module.exports = {
  makeInitialBreakpoint,
  makeNamedBreakpoints,
  renameProp,
  inheritProps,
  normalizeBase,
  makeFontSize,
  makeStep,
  calcRatio,
  normalizeRatio,
  calcLeading,
  setRootProp,
  setBreakpointNameProp,
  makeBreakpointsMapProcess,
  makeBreakpointsMap,
};
