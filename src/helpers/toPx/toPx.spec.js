const toPx = require('./');

describe('toPx', () => {
  it('should if em', () => {
    expect(toPx('2em')).toBe(32);
  });
});
