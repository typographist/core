import { inheritProps } from '../../src/safe-make-breakpoints/inherit-props';

describe('inheritProps', () => {
  it('inherits all missing key values', () => {
    const breakpoints = [
      {
        base: ['1em', '2em'],
        lineHeight: 1.5,
        name: 'default',
        ratio: '45px at 6',
        value: '0px',
      },
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
    ];

    expect(breakpoints.reduce(inheritProps, [])).toEqual([
      {
        base: ['1em', '2em'],
        lineHeight: 1.5,
        name: 'default',
        ratio: '45px at 6',
        value: '0px',
      },
      {
        base: '17px',
        lineHeight: 1.5,
        name: 'tablet',
        ratio: '45px at 6',
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
        lineHeight: 1.7,
        name: 'lgDesktop',
        ratio: 1.333,
        value: '75em',
      },
      {
        base: '22px',
        lineHeight: 1.7,
        name: 'xlDesktop',
        ratio: 1.333,
        value: '100em',
      },
    ]);
  });
});
