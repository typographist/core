// @flow

type RenameProp = (string, string) => (*) => *;
export const renameProp: RenameProp = (oldProp, newProp) => ({
  [oldProp]: old,
  ...others
}) => ({
  [newProp]: old,
  ...others,
});
