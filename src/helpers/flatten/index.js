// flatten :: Array[Array[a], Array[b]] => Array[a, b]
export const flatten = x =>
  x.reduce(
    (acc, current) =>
      acc.concat(Array.isArray(current) ? flatten(current) : current),
    [],
  );
