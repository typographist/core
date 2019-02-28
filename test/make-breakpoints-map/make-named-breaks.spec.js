import { makeNamedBreaks } from '@make-breakpoints-map/make-named-breaks';
import { userConfig } from '../../src/models';

describe('makeNamedBreaks', () => {
  it('returns array of breakpoints with prop `value`', () => {
    expect(makeNamedBreaks(userConfig)).toEqual([
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
