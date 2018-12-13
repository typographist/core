// @flow

type WithException = ((mixed) => mixed, string) => mixed => boolean;

export const withException: WithException = (fn, errorMessage) => x => {
  if (!(typeof fn === 'function' && fn(x))) {
    throw new Error(errorMessage);
  }

  return true;
};
