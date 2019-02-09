// @flow

export const getAllValuesOf: (string, void | any[]) => (any) => any[] = (
  target,
  memo,
) => (obj) => {
  const buffer = !Array.isArray(memo) ? [] : memo;

  return Object.keys(Object(obj)).reduce((acc, key) => {
    if (key === target) {
      return [...acc, obj[key]];
    }
    if (obj[key] instanceof Object) {
      return [...getAllValuesOf(target, acc)(obj[key])];
    }

    return acc;
  }, buffer);
};
