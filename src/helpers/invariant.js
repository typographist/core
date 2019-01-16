// @flow

export const invariant = (condition: mixed, message: string) => {
  if (!condition) {
    throw new Error(message);
  }
};
