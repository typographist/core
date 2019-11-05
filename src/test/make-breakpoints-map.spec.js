const {
  makeInitialBreakpoint,
  makeNamedBreakpoints,
  renameProp,
  inheritProps,
  makeBreakpointsMap,
  setBreakpointNameProp,
  getBreakpointsMap,
  normalizeBase,
  makeFontSize,
  makeStep,
  calcRatio,
  calcLeading,
  setRootProp,
} = require('../make-breakpoints-map');
const { config, breakpointsMap } = require('./mocks');

describe('makeInitialBreakpoint', () => {
  it('returns the array with a initial breakpoint', () => {
    expect(makeInitialBreakpoint(config)).toEqual([
      {
        base: ['16px', '32px'],
        lineHeight: 1.5,
        name: 'initial',
        ratio: '45px at 6',
        value: '0px',
      },
    ]);
  });
});

describe('makeNamedBreakpoints', () => {
  it('returns array of breakpoints with prop `value`', () => {
    expect(makeNamedBreakpoints(config)).toEqual([
      {
        base: ['17px'],
        breakpoint: '768px',
        name: 'tablet',
      },
      {
        base: ['18px'],
        breakpoint: '992px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
      },
      {
        base: ['20px'],
        breakpoint: '1200px',
        name: 'lgDesktop',
      },
      {
        base: ['22px'],
        breakpoint: '1600px',
        name: 'xlDesktop',
      },
    ]);
  });
});

describe('renameProp', () => {
  it('return object with ranamed prop', () => {
    expect(renameProp('breakpoint', 'value')({ breakpoint: '1024px' })).toEqual(
      {
        value: '1024px',
      },
    );
  });
});

describe('inheritProps', () => {
  it('inherits all missing key values', () => {
    const breaks = [
      {
        base: ['16px', '32px'],
        lineHeight: 1.5,
        name: 'initial',
        ratio: '45px at 6',
        value: '0px',
      },
      {
        base: '17px',
        name: 'tablet',
        value: '768px',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        value: '992px',
      },
      {
        base: '20px',
        name: 'lgDesktop',
        value: '1200px',
      },
      {
        base: '22px',
        name: 'xlDesktop',
        value: '1600px',
      },
    ];

    expect(breaks.reduce(inheritProps, [])).toEqual([
      {
        base: ['16px', '32px'],
        lineHeight: 1.5,
        name: 'initial',
        ratio: '45px at 6',
        value: '0px',
      },
      {
        base: '17px',
        lineHeight: 1.5,
        name: 'tablet',
        ratio: '45px at 6',
        value: '768px',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        value: '992px',
      },
      {
        base: '20px',
        lineHeight: 1.7,
        name: 'lgDesktop',
        ratio: 1.333,
        value: '1200px',
      },
      {
        base: '22px',
        lineHeight: 1.7,
        name: 'xlDesktop',
        ratio: 1.333,
        value: '1600px',
      },
    ]);
  });
});

describe('normalizeBase', () => {
  it('return object with calculated base', () => {
    expect(normalizeBase({ base: ['10px'] })).toEqual({ base: [10] });
  });
});

describe('makeFontSize', () => {
  it('should found number if font-size has rem', () => {
    expect(makeFontSize('666em at 8')).toEqual(666);
  });

  it('should found floating point number if font-size has pixels', () => {
    expect(makeFontSize('6.66px at 8')).toEqual(6.66);
  });

  it('should not found matches ', () => {
    expect(makeFontSize('6.66rem at 8')).toEqual(null);
  });
});

describe('makeStep', () => {
  it('should number after the word at', () => {
    expect(makeStep('666px at 8')).toEqual(8);
  });

  it('should negative number after the word at', () => {
    expect(makeStep('666px at -8')).toEqual(-8);
  });

  it('should floating-point number after the word at', () => {
    expect(makeStep('666px at 8.777')).toEqual(8.777);
  });

  it('should negative floating-point number after the word at', () => {
    expect(makeStep('666px at -8.777')).toEqual(-8.777);
  });

  it('should not support the units for the last found number', () => {
    expect(makeStep('666px at -8.777px')).toEqual(null);
  });
});

describe('calcRatio', () => {
  it('calculate ratio', () => {
    expect(calcRatio(config.ratio, [16])).toEqual(1.1880883987824906);
  });
});

describe('calcLeading', () => {
  it('return calculated leading', () => {
    expect(calcLeading([16], 1.5)).toEqual(24);
  });
});

describe('setRootProp', () => {
  it('adds the root property to the breakpoint', () => {
    expect(
      setRootProp({
        value: '1200px',
        base: [16],
        lineHeight: 1.5,
        ratio: 1.618,
        name: 'tablet',
      }),
    ).toEqual({
      value: '1200px',
      base: [16],
      lineHeight: 1.5,
      ratio: 1.618,
      name: 'tablet',
      root: 12,
    });
  });
});

describe('setBreakpointNameProp', () => {
  it('set breakpoint name prop', () => {
    expect([{ a: 1, name: 'test' }].reduce(setBreakpointNameProp, {})).toEqual({
      test: { a: 1 },
    });
  });
});

describe('makeBreakpointsMap', () => {
  it('return breakpoints model', () => {
    expect(makeBreakpointsMap(config)).toEqual(breakpointsMap);
  });
});

describe('getBreakpointsMap', () => {
  it('create a list of breakpoint values if the user config is valid', () => {
    expect(getBreakpointsMap(config)).toEqual(breakpointsMap);
  });
});
