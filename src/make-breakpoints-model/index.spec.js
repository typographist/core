import {
  makeDefaultBreakpoint,
  setPropName,
  makeNamedBreakpoints,
  createBreakpoints,
  renameProp,
  inheritProps,
  makeBreakpointsMap,
  removePropName,
} from '.';
import { userConfig, breakpoints } from '../mocks';

describe('makeDefaultBreakpoint', () => {
  it('returns the array with a initial breakpoint', () => {
    expect(makeDefaultBreakpoint(userConfig)).toEqual([
      {
        base: ['1em', '2em'],
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
        name: 'tablet',
        breakpoint: '40em',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        breakpoint: '64em',
      },
      {
        base: '20px',
        name: 'lgDesktop',
        breakpoint: '75em',
      },
      {
        base: '22px',
        name: 'xlDesktop',
        breakpoint: '100em',
      },
    ]);
  });
});

describe('createBreakpoints', () => {
  it('returns raw breakpoints from user config', () => {
    expect(createBreakpoints(userConfig)).toEqual([
      {
        base: ['1em', '2em'],
        lineHeight: 1.5,
        name: 'initial',
        ratio: '45px at 6',
        value: '0px',
      },
      {
        base: '17px',
        name: 'tablet',
        breakpoint: '40em',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        breakpoint: '64em',
      },
      {
        base: '20px',
        name: 'lgDesktop',
        breakpoint: '75em',
      },
      {
        base: '22px',
        name: 'xlDesktop',
        breakpoint: '100em',
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
        base: ['1em', '2em'],
        lineHeight: 1.5,
        name: 'initial',
        ratio: '45px at 6',
        value: '0px',
      },
      {
        base: '17px',
        name: 'tablet',
        value: '40em',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        value: '64em',
      },
      {
        base: '20px',
        name: 'lgDesktop',
        value: '75em',
      },
      {
        base: '22px',
        name: 'xlDesktop',
        value: '100em',
      },
    ];

    expect(breaks.reduce(inheritProps, [])).toEqual([
      {
        base: ['1em', '2em'],
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
        value: '40em',
      },
      {
        base: '18px',
        lineHeight: 1.7,
        name: 'desktop',
        ratio: 1.333,
        value: '64em',
      },
      {
        base: '20px',
        lineHeight: 1.7,
        name: 'lgDesktop',
        ratio: 1.333,
        value: '75em',
      },
      {
        base: '22px',
        lineHeight: 1.7,
        name: 'xlDesktop',
        ratio: 1.333,
        value: '100em',
      },
    ]);
  });
});

describe('makeBreakpointsMap', () => {
  it('return breakpoints map', () => {
    expect(breakpoints.reduce(makeBreakpointsMap, {})).toEqual({
      initial: {
        base: [16, 32],
        lineHeight: 1.5,
        ratio: 1.1880883987824906,
        root: 12,
        value: '0px',
        name: 'initial',
      },
      tablet: {
        base: [17],
        lineHeight: 1.5,
        ratio: 1.1761442744249144,
        root: 13,
        value: '640px',
        name: 'tablet',
      },
      desktop: {
        base: [18],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 15.5,
        value: '1024px',
        name: 'desktop',
      },
      lgDesktop: {
        base: [20],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 17,
        value: '1200px',
        name: 'lgDesktop',
      },
      xlDesktop: {
        base: [22],
        lineHeight: 1.7,
        ratio: 1.333,
        root: 18.5,
        value: '1600px',
        name: 'xlDesktop',
      },
    });
  });
});

describe('removePropName', () => {
  it('remove the propery name in the object', () => {
    expect(removePropName({ a: 1, name: test })).toEqual({ a: 1 });
  });
});
