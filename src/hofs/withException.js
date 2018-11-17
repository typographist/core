export const withException = (fn, errorMessage) => x => {
  if (!(typeof fn === 'function' && fn(x))) {
    throw new Error(errorMessage);
  }

  return true;
};
