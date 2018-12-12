import { getStep } from '.';

describe('getStep fn', () => {
  it('return `step` from ratio', () => {
    expect(getStep('45px at 6')).toEqual(6);
  });
});
