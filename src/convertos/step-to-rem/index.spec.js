describe('convertors', () => {
  describe('stepToRem', () => {
    it('should the argument breakpointName is not specified', () => {
      // expect(stepToRem(6, breakpoints)).toEqual('3.75rem');
    });
    it('should breakpoints name === tablet', () => {
      // expect(stepToRem(6, breakpoints, 'tablet')).toEqual('3.6923076923076925rem');
    });
    it('should breakpoints name === desktop', () => {
      // expect(stepToRem(6, breakpoints, 'desktop')).toEqual('6.3125rem');
    });
    it('should breakpoints name === lgDesktop', () => {
      // expect(stepToRem(6, breakpoints, 'lgDesktop')).toEqual('6.588235294117647rem');
    });
    it('should breakpoints name === xlDesktop', () => {
      // expect(stepToRem(6, breakpoints, 'xlDesktop')).toEqual('6.473684210526316rem');
    });
  });
});
