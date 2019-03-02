import { renameProp } from '@make-breakpoints-model/rename-prop';

describe('renameProp', () => {
  it('return object with ranamed prop', () => {
    const renameBreakpointWithValue = renameProp('breakpoint', 'value');
    expect(renameBreakpointWithValue({ breakpoint: '1024px' })).toEqual({
      value: '1024px',
    });
  });
});
