import { makeDefaultBreak } from '.';
import { userConfig } from '../../mocks';

describe('make breakpoints', () => {
  describe('makeDefaultBreak function', () => {
    it('make list with first breakpoint values', () => {
      expect(makeDefaultBreak(userConfig)).toEqual([
        {
          base: ['1em', '2em'],
          lineHeight: 1.5,
          name: 'default',
          ratio: '45px at 6',
          value: '0px',
        },
      ]);
    });
  });
});
