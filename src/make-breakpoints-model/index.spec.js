import {
  makeInitialBreakpoint,
  setPropName,
  makeNamedBreakpoints,
  createBreakpoints,
  renameProp,
  inheritProps,
  makeBreakpointsProcess,
  makeBreakpointsModel,
  setBreakpointNameProp,
} from '.';
import { userConfig, breakpointsModel } from '../mocks';

describe('makeInitialBreakpoint', () => {
  it('returns the array with a initial breakpoint', () => {
    expect(makeInitialBreakpoint(userConfig)).toEqual([
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
describe('setPropName', () => {
  it('set the name property in the object', () => {
    expect(setPropName(['test', { a: 1 }])).toEqual({ a: 1, name: 'test' });
  });
});

describe('makeNamedBreakpoints', () => {
  it('returns array of breakpoints with prop `value`', () => {
    expect(makeNamedBreakpoints(userConfig)).toEqual([
      {
        base: '17px',
        breakpoint: '768px',
        name: 'tablet',
      },
      {
        base: '18px',
        breakpoint: '992px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
      },
      {
        base: '20px',
        breakpoint: '1200px',
        name: 'lgDesktop',
      },
      {
        base: '22px',
        breakpoint: '1600px',
        name: 'xlDesktop',
      },
    ]);
  });
});

describe('createBreakpoints', () => {
  it('returns raw breakpoints from user config', () => {
    expect(createBreakpoints(userConfig)).toEqual([
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
        breakpoint: '768px',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        breakpoint: '992px',
      },
      {
        base: '20px',
        name: 'lgDesktop',
        breakpoint: '1200px',
      },
      {
        base: '22px',
        name: 'xlDesktop',
        breakpoint: '1600px',
      },
    ]);
  });
});

describe('renameProp', () => {
  it('return object with ranamed prop', () => {
    const renameBreakpointWithValue = renameProp('breakpoint', 'value');
    expect(renameBreakpointWithValue({ breakpoint: '1024px' })).toEqual({
      value: '1024px',
    });
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

describe('setBreakpointNameProp', () => {
  it('set breakpoint name prop', () => {
    expect([{ a: 1, name: 'test' }].reduce(setBreakpointNameProp, {})).toEqual({
      test: { a: 1 },
    });
  });
});

describe('makeBreakpointsProcess', () => {
  it('return breakpoints model', () => {
    expect(makeBreakpointsProcess(userConfig)).toEqual(breakpointsModel);
  });
});

describe('makeBreakpointsModel', () => {
  it('create a list of breakpoint values if the user config is valid', () => {
    expect(makeBreakpointsModel(userConfig)).toEqual({
      initial: {
        base: [16, 32],
        lineHeight: 1.5,
        ratio: 1.1880883987824906,
        root: 12,
        value: '0px',
      },
      tablet: {
        base: [17],
        lineHeight: 1.5,
        ratio: 1.1761442744249144,
        root: 13,
        value: '768px',
      },
      desktop: {
        base: [18],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 15.5,
        value: '992px',
      },
      lgDesktop: {
        base: [20],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 17,
        value: '1200px',
      },
      xlDesktop: {
        base: [22],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 18.5,
        value: '1600px',
      },
    });
  });
});
