var BROWSER_CONTEXT = 16;

// merge :: {String: a} -> {String: a} -> {String: a}
exports.merge = function() {
  var result = {};

  for (var i = 0; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      result[key] = arguments[i][key];
    }
  }

  return result;
};

// pick :: ([String], {String :: a}) -> {String :: a}
exports.pick = function() {
  var keys = Array.prototype.slice.call(arguments, 0, -1);
  var obj = arguments[arguments.length - 1];

  var result = {};

  for (var key in keys) {
    result[key] = obj[key];
  }

  return result;
};

// omit :: ([String], {String :: a}) -> {String :: a}
exports.omit = function() {
  var keys = Array.prototype.slice.call(arguments, 0, -1);
  var obj = arguments[arguments.length - 1];

  var result = {};

  for (var key in obj) {
    if (keys.indexOf(key) < 0) {
      result[key] = obj[key];
    }
  }

  return result;
};

// deepObjectValues :: (String, ?a | [a]) -> [a]
exports.deepObjectValues = function deepObjectValues(target, memo) {
  return function(obj) {
    var result = !Array.isArray(memo) ? [] : memo;

    for (var key in obj) {
      if (key === target) {
        result.push(obj[key]);
      }

      if (obj[key] instanceof Object) {
        deepObjectValues(target, result)(obj[key]);
      }
    }

    return result;
  };
};

// flatten :: [a] -> [b]
exports.flatten = function flatten(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

// invariant :: (a, String) -> Void
exports.invariant = function(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
};

// ---------- CONVERTORS -----------------------------------------------------------
// percentage :: (x: Number | String | [Number]) -> String
exports.percentage = function(x) {
  return (parseFloat(x) / BROWSER_CONTEXT) * 100 + '%';
};

// toPx :: String -> String
exports.toPx = function(x) {
  return parseFloat(x) * BROWSER_CONTEXT + 'px';
};

// toEm :: String -> String
exports.toEm = function(x) {
  return parseFloat(x) / BROWSER_CONTEXT + 'em';
};

// toRem :: (Number, Number | [Number]) -> String
exports.toRem = function(root, fontSize) {
  return parseFloat(fontSize) / root + 'rem';
};

// ---------- VALIDATORS -----------------------------------------------------------
// isNumeric :: a -> Boolean
exports.isNumeric = function(x) {
  return !Number.isNaN(parseFloat(x)) && isFinite(x);
};

// ratioHasFontSize :: String -> Boolean
exports.ratioHasFontSize = function(x) {
  return /^\d+(\.\d+)?px\b/g.test(x);
};

// ratioHasAtWord :: String -> Boolean
exports.ratioHasAtWord = function(x) {
  return /\sat\s/.test(x);
};

// ratioHasStep :: String -> Boolean
exports.ratioHasStep = function(x) {
  return /-?\b\d+(\.\d+)?\b\s*$/g.test(x);
};

// hasPx :: a -> Boolean
exports.hasPx = function(x) {
  return /\d+(\.\d+)?px/.test(x);
};

// isValidStep :: String -> Boolean
exports.isValidStep = function(x) {
  return /^-?\d+(\.\d+)?$/.test(x);
};
