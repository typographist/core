import { isObject } from '../is-object';

export const getAllValuesOf = (target, memo) => x => {
  const buffer = !Array.isArray(memo) ? [] : memo;

  for (const i in x) {
    if (Object.prototype.hasOwnProperty.call(x, i)) {
      if (i === target) {
        buffer.push(x[i]);
      } else if (Array.isArray(x[i]) || isObject(x[i])) {
        getAllValuesOf(target, buffer)(x[i]);
      }
    }
  }

  return buffer;
};
