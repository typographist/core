import { percentageOfDefaultBrowserFontSize } from '.';

describe('percentageOfDefaultBrowserFontSize', () => {
  it('should convert to percents', () => {
    expect(percentageOfDefaultBrowserFontSize(16)).toBe(100);
  });
});
