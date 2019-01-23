// renameProp :: (String, String) -> Object -> Object
export const renameProp = (oldProp, newProp) => ({
  [oldProp]: old,
  ...others
}) => ({
  [newProp]: old,
  ...others,
});
