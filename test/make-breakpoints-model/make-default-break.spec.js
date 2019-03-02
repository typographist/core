import { makeDefaultBreak } from '../../src/make-breakpoints-model/make-default-break';
import { userConfig } from '../../src/mocks';

describe('makeDefaultBreak', () => {
  it('returns array with default breakpoint', () => {
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
