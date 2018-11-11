const toPx = require('../to-px');
const { HAS_PX, HAS_EM } = require('../../constants/regexes');

/**
 * @param {Array<string>|string} base
 * @return {Array<number>|number}
 */
const stripBase = val => {
  let result;

  if (Array.isArray(val)) {
    result = val.map(item => stripBase(item));
  } else if (typeof val === 'string') {
    if (HAS_PX.test(val)) {
      result = parseFloat(val);
    }

    if (HAS_EM.test(val)) {
      result = toPx(val);
    }
  }

  return result;
};

module.exports = stripBase;
