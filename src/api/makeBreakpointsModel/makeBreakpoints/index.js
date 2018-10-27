const { isObject } = require('../../../helpers');

/**
 * @param {object} config
 * @return {array<string>}
 */
const getBreakpointsName = config =>
  Object.keys(config).filter(key =>
    [key !== 'base', key !== 'lineHeight', key !== 'ratio'].every(Boolean),
  );

/**
 * @param {object} config
 * @return {array<object>} array with breakpoints
 */
const getBreakpoints = config =>
  Object.values(config).filter(val => isObject(val) && val.breakpoint);

/**
 * @param {function|array<any>} breakpoints
 * @param {function|array<any>} breakpointsName
 * @return {array<object>} brakpoint with names
 */
const setBreakpointName = (breakpoints, breakpointsName) =>
  breakpoints.map((breakpoint, i) => ({
    ...breakpoint,
    name: breakpointsName[i],
  }));

/**
 * @param {function} breakpoints
 * @return {array<object>}
 */
const setBreakpointValue = breakpoints =>
  breakpoints.map(breakpoint => ({
    ...breakpoint,
    value: breakpoint.breakpoint,
  }));

module.exports = {
  getBreakpointsName,
  getBreakpoints,
  setBreakpointName,
  setBreakpointValue,
};
