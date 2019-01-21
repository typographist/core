import { makeDefaultBreak } from '../../src/make-breakpoints/make-default-break';
import { userConfig } from '../../src/models/user-config';

describe('makeDefaultBreak', () => {
  it('returns array with default breakpoint', () => {
    expect(makeDefaultBreak(userConfig)).toEqual([
      {
        base: ['1em', '2em'],
        lineHeight: 1.5,
        name: 'default',
        ratio: '45px at 6',
        breakpoint: '0px',
      },
    ]);
  });
});
