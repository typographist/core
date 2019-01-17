import { makeNamedBreaks } from '../../src/make-breakpoints/make-named-breaks';
import { userConfig } from '../../src/models/user-config';

describe('makeNamedBreaks', () => {
  it('returns array of breakpoints with prop `value`', () => {
    expect(makeNamedBreaks(userConfig)).toEqual([
      {
        base: '17px',
        name: 'tablet',
        value: '40em',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        value: '64em',
      },
      {
        base: '20px',
        name: 'lgDesktop',
        value: '75em',
      },
      {
        base: '22px',
        name: 'xlDesktop',
        value: '100em',
      },
    ]);
  });
});
