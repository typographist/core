//  https://www.modularscale.com/

// calcStartPosition :: (Number, [Number]) -> [Number]
var calcStartPosition = function(step, base) {
  return Math.round(
    (step / base.length - Math.floor(step / base.length)) * base.length,
  );
};

// normalizeBases :: ([Number], Number, Number) -> Number
var normalizeBases = function(base, baseHigh, ratio) {
  var cloneBase = base.slice(0);

  // eslint-disable-next-line no-plusplus
  for (var i = 1; i < cloneBase.length; i++) {
    // shift up if value too low
    while (cloneBase[i] / 1 < cloneBase[0] / 1) {
      cloneBase[i] *= Math.pow(ratio, 1);
    }
    // Shift down if too high
    while (cloneBase[i] / 1 >= baseHigh / 1) {
      cloneBase[i] *= Math.pow(ratio, -1);
    }
  }

  return cloneBase.sort();
};

// dumpModularScale :: (String | Number, [Number], Number) -> Number
var modularScale = function(rawStep, base, ratio) {
  var step = Number(rawStep);

  if (base.length !== 1) {
    var startPosition = calcStartPosition(step, base);
    var fontSize = Math.pow(ratio, Math.floor(step / base.length));
    var baseHigh = Math.pow(ratio, 1) * base[0];
    var normalizedBases = normalizeBases(base, baseHigh, ratio);

    return fontSize * normalizedBases[startPosition];
  }

  return Math.round(Math.pow(ratio, step) * parseFloat(base));
};

module.exports = {
  calcStartPosition,
  normalizeBases,
  modularScale,
};
