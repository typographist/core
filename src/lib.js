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

// isNumeric :: a -> Boolean
exports.isNumeric = function(x) {
  return !Number.isNaN(parseFloat(x)) && isFinite(x);
};
