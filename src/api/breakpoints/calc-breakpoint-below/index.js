const { camelize } = require('../../../helpers');
const { toEm } = require('../../../helpers');
const getBreakpointMax = require('../get-breakpoint-max');
const getNamesOfBreakpoints = require('../get-names-of-breakpoints');

/**
 * The function takes the names of breakpoints in the camel-case notation. Valid are all breakpoints specified in the user configuration except the last one.
 * @param {string} upperBreakName Breakpoint name.
 * @param {array<Object>} config User configuration.
 * @return {string|null} Value of the next breakpoint - 0.02px and convert to em. Or null  if the name of the last breakpoint is set.
 */
module.exports = (upperBreakName, config) => {
  const camelizeUpperBreakName = camelize(upperBreakName);
  const namesOfBreakpoints = getNamesOfBreakpoints(config);
  const lastBreakName = namesOfBreakpoints[namesOfBreakpoints.length - 1];
  let result = null;

  // Todo    Split into 2 functions one checks the condition, the other counts the result.
  if (camelizeUpperBreakName !== lastBreakName) {
    const maxBreakVal = getBreakpointMax(camelizeUpperBreakName, config);
    result = `${toEm(maxBreakVal)}em`;
  }

  return result;
};
