import { UserConfig as config } from '../mocks';
import { makeBreakpoints } from '.';

describe('make breaks model', () => {
  describe('makeBreakpoints function', () => {
    it('make list with first breakpoint values', () => {
      expect(makeBreakpoints(config)).toEqual([
        {
          base: [16, 32],
          lineHeight: 1.5,
          name: 'default',
          ratio: 1.1342044031840226,
          root: 12,
          value: '0px',
        },
        {
          base: 17,
          lineHeight: 1.5,
          name: 'tablet',
          ratio: 1.1258335640240535,
          root: 13,
          value: '640px',
        },
        {
          base: 18,
          lineHeight: 1.7,
          name: 'desktop',
          ratio: 1.333,
          root: 16,
          value: '1024px',
        },
        {
          base: 20,
          lineHeight: 1.7,
          name: 'lgDesktop',
          ratio: 1.333,
          root: 17,
          value: '1200px',
        },
        {
          base: 22,
          lineHeight: 1.7,
          name: 'xlDesktop',
          ratio: 1.333,
          root: 19,
          value: '1600px',
        },
      ]);
    });
  });
});
