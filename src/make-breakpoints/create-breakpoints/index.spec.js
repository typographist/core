import { createBreakpoints } from '.';
import { UserConfig } from '../../mocks';

describe('make breakpoints', () => {
  describe('createBreakpoints fn', () => {
    it('concatenates default breakpoint and named breakpoints', () => {
      expect(createBreakpoints(UserConfig)).toEqual([
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
      ]);
    });
  });
});
