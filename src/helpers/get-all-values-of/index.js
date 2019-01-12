// @flow

import { isObject } from '../is-object';

type GetAllValuesOf = (any, any) => (any) => mixed[];
export const getAllValuesOf: GetAllValuesOf = (target, memo) => (obj) => {
  const buffer = !Array.isArray(memo) ? [] : memo;

  for (const key in obj) {
    if (key === target) {
      buffer.push(obj[key]);
    } else if (Array.isArray(obj[key]) || isObject(obj[key])) {
      getAllValuesOf(target, buffer)(obj[key]);
    }
  }

  return buffer;
};
