import { calcRoot } from '.';

describe('calcRoot', () => {
  it('should calc root font size', () => {
    expect(calcRoot(24)).toEqual(12);
  });
});
