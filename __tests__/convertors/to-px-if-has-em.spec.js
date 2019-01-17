import { toPxIfHasEm } from '../../src/convertors/to-px-if-has-em';

describe('toPxIfHasEm', () => {
  it('should convert to px if has em unit', () => {
    expect(toPxIfHasEm('2em')).toEqual('32px');
  });

  it('should return value in pixels', () => {
    expect(toPxIfHasEm('2px')).toEqual('2px');
  });
});
