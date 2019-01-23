import { createBreakpoints } from '../../src/safe-make-breakpoints/create-breakpoints';
import { userConfig } from '../../src/models/user-config';

describe('createBreakpoints', () => {
  it('returns raw breakpoints from user config', () => {
    expect(createBreakpoints(userConfig)).toEqual([
      {
        base: ['1em', '2em'],
        lineHeight: 1.5,
        name: 'default',
        ratio: '45px at 6',
        breakpoint: '0px',
      },
      {
        base: '17px',
        name: 'tablet',
        breakpoint: '40em',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        breakpoint: '64em',
      },
      {
        base: '20px',
        name: 'lgDesktop',
        breakpoint: '75em',
      },
      {
        base: '22px',
        name: 'xlDesktop',
        breakpoint: '100em',
      },
    ]);
  });
});
