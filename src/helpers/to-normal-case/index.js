// toNormalCase :: String => String
export const toNormalCase = x =>
  x.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
