import { makeBreakMap } from '@make-breakpoints-map/make-break-map';
import { breakpoints } from '../../src/mocks';

describe('makeBreaksMap', () => {
  it('return breakpoints map', () => {
    expect(breakpoints.reduce(makeBreakMap, {})).toEqual({
      default: {
        base: [16, 32],
        lineHeight: 1.5,
        ratio: 1.1880883987824906,
        root: 12,
        value: '0px',
        name: 'default',
      },
      tablet: {
        base: [17],
        lineHeight: 1.5,
        ratio: 1.1761442744249144,
        root: 13,
        value: '640px',
        name: 'tablet',
      },
      desktop: {
        base: [18],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 15.5,
        value: '1024px',
        name: 'desktop',
      },
      lgDesktop: {
        base: [20],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 17,
        value: '1200px',
        name: 'lgDesktop',
      },
      xlDesktop: {
        base: [22],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 18.5,
        value: '1600px',
        name: 'xlDesktop',
      },
    });
  });
});
