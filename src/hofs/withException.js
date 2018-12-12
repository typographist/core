// @flow

type WithException = (
  fn: (any) => any,
  errorMessage: string,
) => (x: any) => boolean;

export const withException: WithException = (fn, errorMessage) => x => {
  if (!(typeof fn === 'function' && fn(x))) {
    throw new Error(errorMessage);
  }

  return true;
};
