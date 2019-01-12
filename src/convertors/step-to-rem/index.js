// @flow

// import * as R from 'ramda';
// import { modularScale } from '../../calculators';
// import { toRem } from '../to-rem';

// const getFirstBreak = R.head;
// const propNameEq = R.propEq('name');

// const toRemFontSize = (step, breaks, breakName) => {
//   const firstBreak = getFirstBreak(breaks);

//   const getBreak =
//     breakName === undefined ? getFirstBreak : R.find(propNameEq(breakName));
//   const targetBreak =
//     breakName === undefined ? getFirstBreak(breaks) : getBreak(breaks);
//   const getFontSize =
//     breakName === undefined
//       ? modularScale(firstBreak)
//       : modularScale(targetBreak);
//   const fontSize = getFontSize(step);

//   return toRem(fontSize, targetBreak);
// };

// export const stepToRem = (step, breaks, breakName) =>
//   toRemFontSize(step, breaks, breakName);

// export const stepToRem = (step, breaks, breakName) => {
//   if (breakName === undefined) {
//     const firstBreakpoint = breaks[0];
//     const getFontSize = modularScale(firstBreakpoint);

//     return toRem(getFontSize(step), firstBreakpoint);
//   }

//   const breakpoint = breaks.find(({ name }) => name === breakName);
//   const getFontSize = modularScale(breakpoint);

//   return toRem(getFontSize(step), breakpoint);
// };
