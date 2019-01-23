// setNameProp :: Object -> Object
const setNameProp = ([breakName, breakBody]) => ({
  ...breakBody,
  name: breakName,
});

// makeNamedBreaks :: Object -> [Object]
export const makeNamedBreaks = ({ base, lineHeight, ratio, ...breakpoints }) =>
  Object.entries(breakpoints).map(setNameProp);
