// isObject :: a -> Boolean
export const isObject = val =>
  Object.prototype.toString.call(val).slice(8, -1) === 'Object';
