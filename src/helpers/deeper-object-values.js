// @flow

export const deeperObjectValues: (string, void | any[]) => (any) => any[] = (
  target,
  memo,
) => (obj) => {
  const buffer = !Array.isArray(memo) ? [] : memo;

  return Object.keys(Object(obj)).reduce((acc, key) => {
    if (key === target) {
      return [...acc, obj[key]];
    }
    if (obj[key] instanceof Object) {
      return [...deeperObjectValues(target, acc)(obj[key])];
    }

    return acc;
  }, buffer);
};
