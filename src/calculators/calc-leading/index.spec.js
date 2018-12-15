import { calcLeading } from '.';

describe('calcLeading', () => {
  it('should calc leading if base is array', () => {
    expect(calcLeading([16, 33], 1.5)).toEqual(24);
  });

  it('should calc leading if base is number', () => {
    expect(calcLeading([16], 1.5)).toEqual(24);
  });
});
