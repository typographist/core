// @flow

export const isNumeric = (x: mixed) =>
  !Number.isNaN(parseFloat(x)) && isFinite(x);

export const errorReporter = (message: string) => {
  throw new Error(`[typographist-core]: Check your user config. ${message}`);
};

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
