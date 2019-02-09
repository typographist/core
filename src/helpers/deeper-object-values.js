// @flow

export const deeperObjectValues: (string, void | any[]) => (any) => any[] = (
  target,
  memo,
) => (obj) =>
  Object.keys(Object(obj)).reduce(
    (acc, key) => {
      if (key === target) {
        return [...acc, obj[key]];
      }
      if (obj[key] instanceof Object) {
        return [...deeperObjectValues(target, acc)(obj[key])];
      }

      return acc;
    },
    !Array.isArray(memo) ? [] : memo,
  );
