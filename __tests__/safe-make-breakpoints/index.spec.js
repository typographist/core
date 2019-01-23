import { userConfig } from '../../src/models/user-config';
import { safeMakeBreakpoints } from '../../src/safe-make-breakpoints';

describe('make breakpoints', () => {
  describe('safeMakeBreakpoints', () => {
    it('create a list of breakpoint values if the user config is valid', () => {
      expect(safeMakeBreakpoints(userConfig).getOr()).toEqual({
        default: {
          base: [16, 32],
          lineHeight: 1.5,
          ratio: 1.1880883987824906,
          root: 12,
          value: '0px',
        },
        tablet: {
          base: [17],
          lineHeight: 1.5,
          ratio: 1.1761442744249144,
          root: 13,
          value: '640px',
        },
        desktop: {
          base: [18],
          lineHeight: 1.7,
          ratio: 1.333,
          root: 16,
          value: '1024px',
        },
        lgDesktop: {
          base: [20],
          lineHeight: 1.7,
          ratio: 1.333,
          root: 17,
          value: '1200px',
        },
        xlDesktop: {
          base: [22],
          lineHeight: 1.7,
          ratio: 1.333,
          root: 19,
          value: '1600px',
        },
      });
    });
  });
});
