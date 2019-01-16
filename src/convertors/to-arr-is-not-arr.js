// @flow

export const toArrIsNotArr = (value: string | string[]): * =>
  Array.isArray(value) ? value : Array.of(value);
