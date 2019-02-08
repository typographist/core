// @flow

export const getAllValuesOf: (string, void | any[]) => (any) => any[] = (
  target,
  memo,
) => (obj) => {
  const buffer = !Array.isArray(memo) ? [] : memo;

  return Object.keys(Object(obj)).reduce(
    (acc, key) =>
      key === target
        ? [...acc, obj[key]]
        : [...getAllValuesOf(target, acc)(obj[key])],
    buffer,
  );
};
