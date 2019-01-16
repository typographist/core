// @flow

export type UserConfigBreakpoint = {
  value: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number,
};

export type UserConfig = {
  base: string | string[],
  lineHeight: number,
  ratio: string | number,
  tablet: UserConfigBreakpoint,
  desktop: UserConfigBreakpoint,
  lgDesktop: UserConfigBreakpoint,
  xlDesktop: UserConfigBreakpoint,
};

export const userConfig: UserConfig = {
  base: ['1em', '2em'],
  lineHeight: 1.5,
  ratio: '45px at 6',
  tablet: {
    value: '40em',
    base: '17px',
  },
  desktop: {
    value: '64em',
    base: '18px',
    lineHeight: 1.7,
    ratio: 1.333,
  },
  lgDesktop: {
    value: '75em',
    base: '20px',
  },
  xlDesktop: {
    value: '100em',
    base: '22px',
  },
};
