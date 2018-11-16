describe('calcFontSize', () => {
  // it('should get font-size from 6 position', () => {
  //   expect(calcFontSize(6, 12, 1.5)).toBe(137);
  // });
});

describe('stepToRem', () => {
  it('should the argument breakpointName is not specified', () => {
    // expect(stepToRem(6, breakpoints)).toBe('3.75rem');
  });
  it('should breakpoints name === tablet', () => {
    // expect(stepToRem(6, breakpoints, 'tablet')).toBe('3.6923076923076925rem');
  });
  it('should breakpoints name === desktop', () => {
    // expect(stepToRem(6, breakpoints, 'desktop')).toBe('6.3125rem');
  });
  it('should breakpoints name === lgDesktop', () => {
    // expect(stepToRem(6, breakpoints, 'lgDesktop')).toBe('6.588235294117647rem');
  });
  it('should breakpoints name === xlDesktop', () => {
    // expect(stepToRem(6, breakpoints, 'xlDesktop')).toBe('6.473684210526316rem');
  });
});
