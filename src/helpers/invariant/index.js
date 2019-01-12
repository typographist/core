// @flow

export const invariant: (mixed) => void = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};
