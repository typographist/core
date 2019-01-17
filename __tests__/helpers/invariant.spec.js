import { invariant } from '../../src/helpers/invariant';

describe('invariant fn', () => {
  it('if the condition is not fulfilled, throw an error', () => {
    expect(invariant(() => false, 'WTF!?')).toEqual(undefined);
  });
});
