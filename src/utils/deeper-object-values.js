// @flow

type Memo = void | mixed[];
type Config = {
  [string]: any,
};

export const deeperObjectValues: (string, Memo) => (Config) => mixed[] = (
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
