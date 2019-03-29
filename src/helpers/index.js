// is :: Object -> a -> Boolean
export const is = (type) => (x) => Object(x) instanceof type;

// type :: a -> String
export const type = (x) => Object.prototype.toString.call(x).slice(8, -1);

// objectValues :: (String, ?[a]) -> [a]
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

// head :: [a] -> a | Undefined
// eslint-disable-next-line no-unused-vars
export const head = ([first, ...tail]) => first;

// tail :: [a] -> a | Undefined
// eslint-disable-next-line no-unused-vars
export const tail = ([first, ...rest]) => rest;

// every :: a -> Boolean -> [a] -> Boolean
export const every = (f) => (arr) => arr.every(f);

// some ::  a -> Boolean -> [a] -> Boolean
export const some = (f) => (arr) => arr.some(f);

// all :: [a -> Boolean] -> a -> Boolean
export const all = (...fns) => (x) =>
  fns.map((f) => f(x)).every((y) => y === true);

// any :: [a -> Boolean] -> a -> Boolean
export const any = (...fns) => (x) =>
  fns.map((f) => f(x)).some((y) => y === true);

// pipe :: (((a, b, ...,n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
export const pipe = (...fns) => (x) => fns.reduce((acc, f) => f(acc), x);

// flatten :: [a] -> [b]
export const flatten = (arr) =>
  arr.reduce(
    (acc, item) =>
      Array.isArray(item) ? [...acc, ...flatten(item)] : [...acc, item],
    [],
  );

// reduce :: ((a, b) -> a) -> a -> [b] -> a
export const reduce = (fn, acc) => (x) => x.reduce(fn, acc);

// map :: (a -> b) -> f a -> f b
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

// filter :: (x -> Boolean) -> f a -> f a
export const filter = (f) => (x) =>
  Array.isArray(x)
    ? x.filter(f)
    : Object.keys(x)
        .filter((key) => f(x[key]))
        .reduce((acc, key) => ({ ...acc, [key]: x[key] }), {});

// invariant :: (a, String) -> Void
export const invariant = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

// invariantWithPrefix :: String -> (a, String) -> Void
export const invariantWithPrefix = (prefix) => (condition, message) =>
  invariant(condition, `${prefix} ${message}`);
