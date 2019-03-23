// is :: Object -> a -> Boolean
export const is = (type) => (x) => Object(x) instanceof type;

// objectValues :: (String, Maybe [a]) -> [a]
export const objectValues = (target, memo) => (obj) =>
  Object.keys(Object(obj)).reduce(
    (acc, key) => {
      if (key === target) {
        return [...acc, obj[key]];
      }

      if (obj[key] instanceof Object) {
        return [...objectValues(target, acc)(obj[key])];
      }

      return acc;
    },
    !Array.isArray(memo) ? [] : memo,
  );

// eslint-disable-next-line no-unused-vars
export const head = ([first, ...tail]) => first;

// eslint-disable-next-line no-unused-vars
export const tail = ([first, ...rest]) => rest;

// every :: Function -> Array -> Boolean
export const every = (f) => (arr) => arr.every(f);

// all :: [Function] -> a -> Boolean
export const all = (...fns) => (x) =>
  fns.map((f) => f(x)).every((y) => y === true);

// any :: [Function] -> a -> Boolean
export const any = (...fns) => (x) =>
  fns.map((f) => f(x)).every((y) => y === true);

// pipe :: [Function] -> a -> a
export const pipe = (...fns) => (x) => fns.reduce((acc, f) => f(acc), x);

// flatten :: [[a]] -> [a]
export const flatten = (arr) =>
  arr.reduce(
    (acc, item) =>
      Array.isArray(item) ? [...acc, ...flatten(item)] : [...acc, item],
    [],
  );

// reduce :: Function -> ([a], a) -> a
export const reduce = (fn) => (x, accum) => x.reduce(fn, accum);

// map :: (a -> b) -> ([a] | Object) -> [b] | Object
export const map = (f) => (x) =>
  Array.isArray(x)
    ? x.map(f)
    : Object.keys(x).reduce(
        (acc, key) => ({
          ...acc,
          [key]: f(x[key]),
        }),
        {},
      );

// invariant :: (a, String) -> Void
export const invariant = (condition, message) => {
  if (!condition) {
    throw new Error(`[typographist-core]: Check your user config. ${message}`);
  }
};
