var getBreakpointsMap = require('./make-breakpoints-map').getBreakpointsMap;
var modularScale = require('./modular-scale');

exports.ratios = {
  AUGMENTED_FOURTH: 1.41421,
  DOUBLE_OCTAVE: 4,
  GOLDEN_SECTION: 1.618034,
  MAJOR_ELEVENTH: 2.666666667,
  MAJOR_SECOND: 1.125,
  MAJOR_SEVENTH: 1.875,
  MAJOR_SIXTH: 1.666666667,
  MAJOR_TENTH: 2.5,
  MAJOR_THIRD: 1.25,
  MAJOR_TWELFTH: 3,
  MINOR_SECOND: 1.066666667,
  MINOR_SEVENTH: 1.777777778,
  MINOR_THIRD: 1.2,
  OCTAVE: 2,
  PERFECT_FIFTH: 1.5,
  PERFECT_FOURTH: 1.333333333,
  PHI: 1.618034,
};

exports.getBreakpointsMap = getBreakpointsMap;
exports.modularScale = modularScale;
