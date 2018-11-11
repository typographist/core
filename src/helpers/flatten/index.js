const flatten = arrayOfArrays =>
  arrayOfArrays.reduce(
    (acc, current) =>
      acc.concat(Array.isArray(current) ? flatten(current) : current),
    [],
  );

module.exports = flatten;
