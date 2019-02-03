// @flow

export const renameProp = <From: *, To: *>(
  oldProp: $Keys<From>,
  newProp: $Keys<To>,
): ((From) => To) => ({ [oldProp]: old, ...others }) => ({
  [newProp]: old,
  ...others,
});
