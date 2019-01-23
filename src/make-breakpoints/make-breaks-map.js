// makeBreaksMap :: Array -> {a: Array}
export const makeBreaksMap = (map, obj) => ({
  ...map,
  [obj.name]: obj,
});
