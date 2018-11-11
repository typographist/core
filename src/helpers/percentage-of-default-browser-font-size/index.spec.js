const percentageOfDefauilBrowserFontSize = require('.');

describe('isObject', () => {
  it('should convert to percents', () => {
    expect(percentageOfDefauilBrowserFontSize(16)).toBe(100);
  });
});
