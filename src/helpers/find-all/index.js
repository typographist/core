const isObject = require('../is-object');

const findAll = (obj, key, memo) => {
  let result = memo;
  if (!Array.isArray(memo)) result = [];

  /* eslint-disable no-restricted-syntax */
  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      if (i === key) {
        result.push(obj[i]);
      } else if (Array.isArray(obj[i]) || isObject(obj[i])) {
        findAll(obj[i], key, result);
      }
    }
  }

  return result;
};
/* eslint-enable */

module.exports = findAll;
