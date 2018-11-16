// calcLeading :: (Array[Number] | Number) => Number
export const calcLeading = (base, lineHeight) =>
  Array.isArray(base)
    ? Math.round(base[0] * lineHeight)
    : Math.round(base * lineHeight);
