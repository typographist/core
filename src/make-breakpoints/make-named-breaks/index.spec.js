import { makeNamedBreaks } from '.';
import { UserConfig as config } from '../../mocks';

describe('make breaks model', () => {
  describe('makeNamedBreaks function', () => {
    it('make list with named breakpoints', () => {
      expect(makeNamedBreaks(config)).toEqual([
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
});