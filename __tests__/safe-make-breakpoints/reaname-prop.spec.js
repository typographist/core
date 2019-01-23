import { renameProp } from '../../src/safe-make-breakpoints/rename-prop';

describe('renameProp', () => {
  it('return object with ranamed prop', () => {
    const renameBreakpointWithValue = renameProp('breakpoint', 'value');
    expect(renameBreakpointWithValue({ breakpoint: '1024px' })).toEqual({
      value: '1024px',
    });
  });
});
