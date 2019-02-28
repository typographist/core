// @flow

export type UserConfig = {
  base: string | string[],
  lineHeight: number,
  ratio: string | number,
  [string]: ?{
    breakpoint: string,
    base?: string | string[],
    lineHeight?: number,
    ratio?: number,
  },
};
