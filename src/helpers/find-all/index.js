import { isObject } from '../is-object';

export const findAll = (obj, key, memo) => {
  let result = memo;
  if (!Array.isArray(memo)) result = [];

  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      if (i === key) {
        result.push(obj[i]);
      } else if (Array.isArray(obj[i]) || isObject(obj[i])) {
        findAll(obj[i], key, result);
      }
    }
  }

  return result;
};
