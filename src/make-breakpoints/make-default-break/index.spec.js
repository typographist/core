import { makeDefaultBreak } from '.';
import { UserConfig as config } from '../../mocks';

describe('make breaks model', () => {
  describe('makeDefaultBreak function', () => {
    it('make list with first breakpoint values', () => {
      expect(makeDefaultBreak(config)).toEqual([
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
