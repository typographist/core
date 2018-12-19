// @flow

export const typeOf: mixed => string = val => {
  const type = Object.prototype.toString.call(val).slice(8, -1);
  const firstLetter = type[0].toLowerCase();

  return `${firstLetter}${type.slice(1)}`;
};
