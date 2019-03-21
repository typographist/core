// objectValues :: (String, Maybe [Any]) -> [Any]
const objectValues = (target, memo) => (obj) =>
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
const head = ([first, ...tail]) => first;

// eslint-disable-next-line no-unused-vars
const tail = ([first, ...rest]) => rest;

// invariant :: (Any, String) -> Void
const invariant = (condition, message) => {
  if (!condition) {
    throw new Error(`[typographist-core]: Check your user config. ${message}`);
  }
};

// pipe :: [Function] -> Any -> Any
const pipe = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

// map :: (a -> b) -> ([a] | Object) -> [b] | Object
const map = (f) => (x) =>
  Array.isArray(x)
    ? x.map(f)
    : Object.keys(x).reduce(
        (acc, key) => ({
          ...acc,
          [key]: f(x[key]),
        }),
        {},
      );

// reduce :: Function -> (Any, Any) -> Any
const reduce = (fn) => (x, accum) => x.reduce(fn, accum);

module.exports = {
  objectValues,
  head,
  tail,
  invariant,
  map,
  pipe,
  reduce,
};
