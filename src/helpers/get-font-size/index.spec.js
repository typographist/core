import { getFontSize } from '.';

describe('getFontSize fn', () => {
  it('return `font-size` from ratio', () => {
    expect(getFontSize('45px at 6')).toEqual(45);
  });
});
