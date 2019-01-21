// @flow

export const errorReporter = (message: string) => {
  throw new Error(`// @typographist/core >>> Check your user config. 
// ${message}`);
};
