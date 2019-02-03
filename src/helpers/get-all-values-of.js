// @flow

import { isObject } from './is-object';

export const getAllValuesOf: (string, void | any[]) => (any) => any[] = (
  target,
  memo,
) => (obj) => {
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
