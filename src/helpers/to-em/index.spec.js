import { toEm } from '.';

describe('toEm', () => {
  it('should convert to em', () => {
    expect(toEm('32px')).toBe('2em');
  });
});
