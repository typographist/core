// @flow

import { isObject } from '../is-object';

type GetAllValuesOf = (any, any) => any => mixed[];
export const getAllValuesOf: GetAllValuesOf = (target, memo) => x => {
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
