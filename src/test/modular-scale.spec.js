const { modularScale } = require('../modular-scale');

describe('modularScale', () => {
  it('calculated `font-size` from the multi-stranded modular scales ', () => {
    expect(modularScale(7, [16, 33, 15], 1.5)).toEqual(49.5);
  });

  it('calculated `font-size` from one ratio', () => {
    expect(modularScale(6, [16], 1.333)).toEqual(90);
  });

  it('calculated `font-size` from one ratio with custom ratio', () => {
    const customRatio = 1.1880883987824906;
    expect(modularScale(6, [16], customRatio)).toEqual(45);
  });
});
