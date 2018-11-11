const getBase = require('../get-base');

/**
 * @param {number} baseSize
 * @param {number} rootSize
 * @return {string}
 */
module.exports = (baseSize, rootSize) => getBase(baseSize) / rootSize;
