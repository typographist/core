// @flow

import type { UserConfig } from '../user-config';

export const userConfig: UserConfig = {
  base: ['1em', '2em'],
  lineHeight: 1.5,
  ratio: '45px at 6',
  tablet: {
    breakpoint: '40em',
    base: '17px',
  },
  desktop: {
    breakpoint: '64em',
    base: '18px',
    lineHeight: 1.7,
    ratio: 1.333,
  },
  lgDesktop: {
    breakpoint: '75em',
    base: '20px',
  },
  xlDesktop: {
    breakpoint: '100em',
    base: '22px',
  },
};