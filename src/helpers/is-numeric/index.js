/**
 * Check for a number
 * @param {any} num
 * @return {boolean}
 */

module.exports = num => !Number.isNaN(parseFloat(num)) && isFinite(num);
